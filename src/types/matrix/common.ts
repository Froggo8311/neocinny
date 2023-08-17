import { EncryptedAttachmentInfo } from 'browser-encrypt-attachment';
import { MsgType } from 'matrix-js-sdk';

export type IImageInfo = {
  w?: number;
  h?: number;
  mimetype?: string;
  size?: number;
};

export type IVideoInfo = IImageInfo & {
  duration?: number;
};

export type IAudioInfo = {
  mimetype?: string;
  size?: string;
  duration?: number;
};

export type IFileInfo = {
  mimetype?: string;
  size?: string;
};

export type IEncryptedFile = EncryptedAttachmentInfo & {
  url: string;
};

export type IThumbnailContent = {
  thumbnail_info?: IImageInfo;
  thumbnail_file?: IEncryptedFile;
  thumbnail_url?: string;
};

export type IImageContent = {
  msgtype: MsgType.Image;
  body?: string;
  url?: string;
  info?: IImageInfo & IThumbnailContent;
  file?: IEncryptedFile;
};

export type IVideoContent = {
  msgtype: MsgType.Video;
  body?: string;
  url?: string;
  info?: IVideoInfo & IThumbnailContent;
  file?: IEncryptedFile;
};

export type IAudioContent = {
  msgtype: MsgType.Audio;
  body?: string;
  url?: string;
  info?: IAudioInfo;
  file?: IEncryptedFile;
};

export type IFileContent = {
  msgtype: MsgType.File;
  body?: string;
  url?: string;
  info?: IFileInfo & IThumbnailContent;
  file?: IEncryptedFile;
};

export type ILocationContent = {
  msgtype: MsgType.Location;
  body?: string;
  geo_uri?: string;
  info?: IThumbnailContent;
};
