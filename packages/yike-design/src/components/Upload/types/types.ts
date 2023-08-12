import { type AxiosResponse } from 'axios';

export interface UploadProps {
  //attr
  action: string;
  defaultFileList?: Array<UploadFile>;
  header?: { [key: string]: any };
  name?: string;
  data?: { [key: string]: any };
  withCredentials?: boolean;
  accept?: string;
  multiple?: boolean;
  drag?: boolean;
  // function
  onProgress?: (presentNumber: number, file: File) => void;
  onSuccess?: (data: AxiosResponse, file: File) => void;
  onError?: (err: any, file: File) => void;
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onChange?: (file: File) => void;
  onRemove?: (file: UploadFile) => void;
}
type FileStatus = 'ready' | 'success' | 'uploading' | 'error';

export interface UploadFile extends Partial<File> {
  uid: string;
  size: number;
  name: string;
  status?: FileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}
