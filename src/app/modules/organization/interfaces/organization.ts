export interface OrganizationDto {
  id: number,
  name: string,
  file: ImageSnippet,
  tracking: {
    usage: number,
    assigned: number
  },
  protection: {
    usage: number,
    assigned: number
  }
}

export class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {
  }
}
