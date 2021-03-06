/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { TPromise } from 'vs/base/common/winjs.base';
import { createDecorator } from 'vs/platform/instantiation/common/instantiation';
import { IRange } from 'vs/editor/common/editorCommon';
import URI from 'vs/base/common/uri';
import { IConfigurationValue } from 'vs/workbench/services/configuration/common/configurationEditing';

export interface ISettingsGroup {
	range?: IRange;
	title: string;
	sections: ISettingsSection[];
}

export interface ISettingsSection {
	range?: IRange;
	description?: string;
	settings: ISetting[];
}

export interface ISetting {
	range?: IRange;
	key: string;
	value: any;
	description?: string;
}

export interface IDefaultSettings {
	uri: URI;
	content: string;

	getSettingsGroups(): ISettingsGroup[];
}

export interface IDefaultKeybindings {
	uri: URI;
	content: string;
}

export const IOpenSettingsService = createDecorator<IOpenSettingsService>('openSettingsService');

export interface IOpenSettingsService {
	_serviceBrand: any;

	defaultSettings: IDefaultSettings;
	defaultKeybindings: IDefaultKeybindings;

	openGlobalSettings(): TPromise<void>;
	openWorkspaceSettings(): TPromise<void>;
	openGlobalKeybindingSettings(): TPromise<void>;
	copyConfiguration(configurationValue: IConfigurationValue): void;
}
