/// <reference path="./_helpers.d.ts" />
import androidcontentContext = android.content.Context;
import iofabricsdkandroidservicescommonIdManager = io.fabric.sdk.android.services.common.IdManager;
import iofabricsdkandroidservicessettingsBetaSettingsData = io.fabric.sdk.android.services.settings.BetaSettingsData;
import iofabricsdkandroidservicespersistencePreferenceStore = io.fabric.sdk.android.services.persistence.PreferenceStore;
import iofabricsdkandroidservicescommonCurrentTimeProvider = io.fabric.sdk.android.services.common.CurrentTimeProvider;
import iofabricsdkandroidservicesnetworkHttpRequestFactory = io.fabric.sdk.android.services.network.HttpRequestFactory;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.crashlytics.android.beta.Beta.d.ts" />
/// <reference path="./com.crashlytics.android.beta.BuildProperties.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.CurrentTimeProvider.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.IdManager.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequestFactory.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.persistence.PreferenceStore.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.BetaSettingsData.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module beta {
				export abstract class AbstractCheckForUpdatesController {
					public constructor(param0: boolean);
					public signalExternallyReady(): boolean;
					public initialize(param0: androidcontentContext, param1: com.crashlytics.android.beta.Beta, param2: iofabricsdkandroidservicescommonIdManager, param3: iofabricsdkandroidservicessettingsBetaSettingsData, param4: com.crashlytics.android.beta.BuildProperties, param5: iofabricsdkandroidservicespersistencePreferenceStore, param6: iofabricsdkandroidservicescommonCurrentTimeProvider, param7: iofabricsdkandroidservicesnetworkHttpRequestFactory): void;
					public constructor();
					public isActivityLifecycleTriggered(): boolean;
					public checkForUpdates(): void;
				}
			}
		}
	}
}

import iofabricsdkandroidActivityLifecycleManager = io.fabric.sdk.android.ActivityLifecycleManager;
import javautilconcurrentExecutorService = java.util.concurrent.ExecutorService;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.crashlytics.android.beta.Beta.d.ts" />
/// <reference path="./com.crashlytics.android.beta.BuildProperties.d.ts" />
/// <reference path="./io.fabric.sdk.android.ActivityLifecycleManager.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.CurrentTimeProvider.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.IdManager.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequestFactory.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.persistence.PreferenceStore.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.BetaSettingsData.d.ts" />
/// <reference path="./java.util.concurrent.ExecutorService.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module beta {
				export class ActivityLifecycleCheckForUpdatesController extends com.crashlytics.android.beta.AbstractCheckForUpdatesController {
					public constructor(param0: boolean);
					public initialize(param0: androidcontentContext, param1: com.crashlytics.android.beta.Beta, param2: iofabricsdkandroidservicescommonIdManager, param3: iofabricsdkandroidservicessettingsBetaSettingsData, param4: com.crashlytics.android.beta.BuildProperties, param5: iofabricsdkandroidservicespersistencePreferenceStore, param6: iofabricsdkandroidservicescommonCurrentTimeProvider, param7: iofabricsdkandroidservicesnetworkHttpRequestFactory): void;
					public constructor();
					public isActivityLifecycleTriggered(): boolean;
					public constructor(param0: iofabricsdkandroidActivityLifecycleManager, param1: javautilconcurrentExecutorService);
				}
			}
		}
	}
}

import javalangBoolean = java.lang.Boolean;
import javautilMap = java.util.Map;
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module beta {
				export class Beta {
					public static TAG: string;
					public getDeviceIdentifiers(): javautilMap;
					public getVersion(): string;
					public doInBackground(): javalangBoolean;
					public constructor();
					public onPreExecute(): boolean;
					public static getInstance(): com.crashlytics.android.beta.Beta;
					public getIdentifier(): string;
				}
			}
		}
	}
}

declare module com {
	export module crashlytics {
		export module android {
			export module beta {
				export class BuildConfig {
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public static ARTIFACT_ID: string;
					public static BUILD_NUMBER: string;
					public static GROUP: string;
					public constructor();
				}
			}
		}
	}
}

import javautilProperties = java.util.Properties;
import javaioInputStream = java.io.InputStream;
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.util.Properties.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module beta {
				export class BuildProperties {
					public versionCode: string;
					public versionName: string;
					public buildId: string;
					public packageName: string;
					public static fromProperties(param0: javautilProperties): com.crashlytics.android.beta.BuildProperties;
					public static fromPropertiesStream(param0: javaioInputStream): com.crashlytics.android.beta.BuildProperties;
				}
			}
		}
	}
}

import iofabricsdkandroidKit = io.fabric.sdk.android.Kit;
/// <reference path="./com.crashlytics.android.beta.BuildProperties.d.ts" />
/// <reference path="./com.crashlytics.android.beta.CheckForUpdatesResponse.d.ts" />
/// <reference path="./com.crashlytics.android.beta.CheckForUpdatesResponseTransform.d.ts" />
/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequestFactory.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module beta {
				export class CheckForUpdatesRequest {
					public invoke(param0: string, param1: string, param2: com.crashlytics.android.beta.BuildProperties): com.crashlytics.android.beta.CheckForUpdatesResponse;
					public constructor(param0: iofabricsdkandroidKit, param1: string, param2: string, param3: iofabricsdkandroidservicesnetworkHttpRequestFactory, param4: com.crashlytics.android.beta.CheckForUpdatesResponseTransform);
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module beta {
				export class CheckForUpdatesResponse {
					public url: string;
					public versionString: string;
					public displayVersion: string;
					public buildVersion: string;
					public packageName: string;
					public instanceId: string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string);
				}
			}
		}
	}
}

import orgjsonJSONObject = org.json.JSONObject;
/// <reference path="./com.crashlytics.android.beta.CheckForUpdatesResponse.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module beta {
				export class CheckForUpdatesResponseTransform {
					public fromJson(param0: orgjsonJSONObject): com.crashlytics.android.beta.CheckForUpdatesResponse;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module beta {
				export class DeviceTokenLoader {
					public constructor();
					public load(param0: androidcontentContext): string;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.crashlytics.android.beta.Beta.d.ts" />
/// <reference path="./com.crashlytics.android.beta.BuildProperties.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.CurrentTimeProvider.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.IdManager.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequestFactory.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.persistence.PreferenceStore.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.BetaSettingsData.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module beta {
				export class ImmediateCheckForUpdatesController extends com.crashlytics.android.beta.AbstractCheckForUpdatesController {
					public constructor(param0: boolean);
					public initialize(param0: androidcontentContext, param1: com.crashlytics.android.beta.Beta, param2: iofabricsdkandroidservicescommonIdManager, param3: iofabricsdkandroidservicessettingsBetaSettingsData, param4: com.crashlytics.android.beta.BuildProperties, param5: iofabricsdkandroidservicespersistencePreferenceStore, param6: iofabricsdkandroidservicescommonCurrentTimeProvider, param7: iofabricsdkandroidservicesnetworkHttpRequestFactory): void;
					public constructor();
					public isActivityLifecycleTriggered(): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.crashlytics.android.beta.Beta.d.ts" />
/// <reference path="./com.crashlytics.android.beta.BuildProperties.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.CurrentTimeProvider.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.IdManager.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequestFactory.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.persistence.PreferenceStore.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.BetaSettingsData.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module beta {
				export class UpdatesController {
					/**
					 * Constructs a new instance of the com.crashlytics.android.beta.UpdatesController interface with the provided implementation.
					 */
					public constructor(implementation: {
						initialize(param0: androidcontentContext, param1: com.crashlytics.android.beta.Beta, param2: iofabricsdkandroidservicescommonIdManager, param3: iofabricsdkandroidservicessettingsBetaSettingsData, param4: com.crashlytics.android.beta.BuildProperties, param5: iofabricsdkandroidservicespersistencePreferenceStore, param6: iofabricsdkandroidservicescommonCurrentTimeProvider, param7: iofabricsdkandroidservicesnetworkHttpRequestFactory): void;
						isActivityLifecycleTriggered(): boolean;
					});
					public initialize(param0: androidcontentContext, param1: com.crashlytics.android.beta.Beta, param2: iofabricsdkandroidservicescommonIdManager, param3: iofabricsdkandroidservicessettingsBetaSettingsData, param4: com.crashlytics.android.beta.BuildProperties, param5: iofabricsdkandroidservicespersistencePreferenceStore, param6: iofabricsdkandroidservicescommonCurrentTimeProvider, param7: iofabricsdkandroidservicesnetworkHttpRequestFactory): void;
					public isActivityLifecycleTriggered(): boolean;
				}
			}
		}
	}
}

