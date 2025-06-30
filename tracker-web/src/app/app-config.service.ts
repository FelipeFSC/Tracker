import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {

	constructor() { }

	private privateBaseUrl: string = 'http://localhost:8081';

	private privateFileAttachment: string = "/file-attachment";

	public get fileAttachment() {
		return this.privateFileAttachment;
	}

	public get baseUrl(): string {
		return this.privateBaseUrl;
	}
}
