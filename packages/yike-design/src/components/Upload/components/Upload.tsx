import clsx from 'clsx';
import type React from 'react';
import { useRef, useState } from 'react';
import axios, { type AxiosProgressEvent } from 'axios';

import { uploadClsPrefix } from '../constants';
import type { UploadFile, UploadProps } from '../types/types';

const Upload: React.FC<React.PropsWithChildren<UploadProps>> = props => {
  const {
    action,
    defaultFileList,
    header,
    name,
    data,
    withCredentials,
    accept,
    multiple,
    // drag,
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    // onRemove,
    onChange,

    children,
  } = props;

  const uploadInputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);

  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };

  const handleClick = () => {
    if (uploadInputRef.current) {
      uploadInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFile(files);
    if (uploadInputRef.current) {
      uploadInputRef.current.value = '';
    }
  };

  const uploadFile = (file: FileList) => {
    const files = Array.from(file);
    files.forEach(file => {
      if (!beforeUpload) {
        postFile(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            postFile(processedFile);
          });
        } else if (result != false) {
          postFile(file);
        }
      }
    });
  };

  const postFile = (file: File) => {
    const _file: UploadFile = {
      uid: Date.now() + 'upload',
      size: file.size,
      name: file.name,
      status: 'ready',
      percent: 0,
      raw: file,
    };
    setFileList(prev => {
      return [_file, ...prev];
    });
    const formData = new FormData();
    formData.append(name || 'file', file);
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
    }
    axios
      .post(action, formData, {
        headers: {
          ...header,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials,
        onUploadProgress: (e: AxiosProgressEvent) => {
          if (e.total) {
            const percent = Math.round((e.loaded * 100) / e.total) || 0;
            if (percent < 100) {
              updateFileList(_file, { percent: percent, status: 'uploading' });
              if (onProgress) {
                onProgress(percent, file);
              }
            }
          }
        },
      })
      .then(response => {
        updateFileList(_file, { percent: 100, status: 'success', response: response.data });
        if (onSuccess) {
          onSuccess(response, file);
        }
        if (onChange) {
          onChange(file);
        }
      })
      .catch(err => {
        updateFileList(_file, { status: 'error', error: err });
        if (onError) {
          onError(err, file);
        }
        if (onChange) {
          onChange(file);
        }
      });
  };

  // const handleRemove = (file: UploadFile) => {
  //   setFileList(prevList => {
  //     return prevList.filter(item => item.uid !== file.uid);
  //   });
  //   if (onRemove) {
  //     onRemove(file);
  //   }
  // };

  return (
    <div className={clsx(uploadClsPrefix)}>
      <div
        className={clsx(`${uploadClsPrefix}-input-wrapper`)}
        style={{ display: 'inline-block' }}
        onClick={handleClick}
      >
        <input
          type="file"
          style={{ display: 'none' }}
          ref={uploadInputRef}
          className="file-input"
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
        />
        {children}
      </div>
      <div>
        {fileList.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Upload;
