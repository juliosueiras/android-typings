/// <reference path="./_helpers.d.ts" />
import androidcontentContext = android.content.Context;
import androidappActivity = android.app.Activity;
import androidosBundle = android.os.Bundle;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class ActivityLifecycleManager {
					public registerCallbacks(param0: io.fabric.sdk.android.ActivityLifecycleManager.Callbacks): boolean;
					public constructor(param0: androidcontentContext);
					public resetCallbacks(): void;
				}
				export module ActivityLifecycleManager {
					export class ActivityLifecycleCallbacksWrapper {
					}
					export abstract class Callbacks {
						public constructor();
						public onActivityResumed(param0: androidappActivity): void;
						public onActivityPaused(param0: androidappActivity): void;
						public onActivityCreated(param0: androidappActivity, param1: androidosBundle): void;
						public onActivitySaveInstanceState(param0: androidappActivity, param1: androidosBundle): void;
						public onActivityStarted(param0: androidappActivity): void;
						public onActivityStopped(param0: androidappActivity): void;
						public onActivityDestroyed(param0: androidappActivity): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class BuildConfig {
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public static ARTIFACT_ID: string;
					public static BUILD_NUMBER: string;
					public static DEVELOPER_TOKEN: string;
					public static GROUP: string;
					public constructor();
				}
			}
		}
	}
}

import javalangThrowable = java.lang.Throwable;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class DefaultLogger {
					public i(param0: string, param1: string, param2: javalangThrowable): void;
					public getLogLevel(): number;
					public v(param0: string, param1: string, param2: javalangThrowable): void;
					public w(param0: string, param1: string, param2: javalangThrowable): void;
					public e(param0: string, param1: string, param2: javalangThrowable): void;
					public d(param0: string, param1: string, param2: javalangThrowable): void;
					public isLoggable(param0: string, param1: number): boolean;
					public d(param0: string, param1: string): void;
					public setLogLevel(param0: number): void;
					public e(param0: string, param1: string): void;
					public constructor();
					public i(param0: string, param1: string): void;
					public log(param0: number, param1: string, param2: string, param3: boolean): void;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
					public constructor(param0: number);
					public log(param0: number, param1: string, param2: string): void;
				}
			}
		}
	}
}

import javautilconcurrentExecutorService = java.util.concurrent.ExecutorService;
import androidosHandler = android.os.Handler;
import javautilCollection = java.util.Collection;
import javalangClass = java.lang.Class;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./io.fabric.sdk.android.ActivityLifecycleManager.d.ts" />
/// <reference path="./io.fabric.sdk.android.Fabric.d.ts" />
/// <reference path="./io.fabric.sdk.android.InitializationCallback.d.ts" />
/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.Logger.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.PriorityThreadPoolExecutor.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.concurrent.ExecutorService.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class Fabric {
					public static TAG: string;
					public getVersion(): string;
					public getAppIdentifier(): string;
					public static getLogger(): io.fabric.sdk.android.Logger;
					public getIdentifier(): string;
					public getCurrentActivity(): androidappActivity;
					public getAppInstallIdentifier(): string;
					public getKits(): javautilCollection;
					public getActivityLifecycleManager(): io.fabric.sdk.android.ActivityLifecycleManager;
					public getExecutorService(): javautilconcurrentExecutorService;
					public static isDebuggable(): boolean;
					public getMainHandler(): androidosHandler;
					public static with(param0: androidcontentContext, param1: native.Array<io.fabric.sdk.android.Kit>): io.fabric.sdk.android.Fabric;
					public static with(param0: io.fabric.sdk.android.Fabric): io.fabric.sdk.android.Fabric;
					public static getKit(param0: javalangClass): io.fabric.sdk.android.Kit;
					public static isInitialized(): boolean;
					public setCurrentActivity(param0: androidappActivity): io.fabric.sdk.android.Fabric;
				}
				export module Fabric {
					export class Builder {
						public handler(param0: androidosHandler): io.fabric.sdk.android.Fabric.Builder;
						public logger(param0: io.fabric.sdk.android.Logger): io.fabric.sdk.android.Fabric.Builder;
						public threadPoolExecutor(param0: io.fabric.sdk.android.services.concurrency.PriorityThreadPoolExecutor): io.fabric.sdk.android.Fabric.Builder;
						public build(): io.fabric.sdk.android.Fabric;
						public appIdentifier(param0: string): io.fabric.sdk.android.Fabric.Builder;
						public constructor(param0: androidcontentContext);
						public kits(param0: native.Array<io.fabric.sdk.android.Kit>): io.fabric.sdk.android.Fabric.Builder;
						public appInstallIdentifier(param0: string): io.fabric.sdk.android.Fabric.Builder;
						public initializationCallback(param0: io.fabric.sdk.android.InitializationCallback): io.fabric.sdk.android.Fabric.Builder;
						public executorService(param0: javautilconcurrentExecutorService): io.fabric.sdk.android.Fabric.Builder;
						public debuggable(param0: boolean): io.fabric.sdk.android.Fabric.Builder;
					}
				}
			}
		}
	}
}

import javaioFile = java.io.File;
import androiddatabasesqliteSQLiteDatabaseCursorFactory = android.database.sqlite.SQLiteDatabase.CursorFactory;
import androiddatabasesqliteSQLiteDatabase = android.database.sqlite.SQLiteDatabase;
import androiddatabaseDatabaseErrorHandler = android.database.DatabaseErrorHandler;
import androidcontentSharedPreferences = android.content.SharedPreferences;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./android.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class FabricContext {
					public getFilesDir(): javaioFile;
					public getDatabasePath(param0: string): javaioFile;
					public openOrCreateDatabase(param0: string, param1: number, param2: androiddatabasesqliteSQLiteDatabaseCursorFactory, param3: androiddatabaseDatabaseErrorHandler): androiddatabasesqliteSQLiteDatabase;
					public getSharedPreferences(param0: string, param1: number): androidcontentSharedPreferences;
					public getCacheDir(): javaioFile;
					public constructor(param0: androidcontentContext, param1: string, param2: string);
					public getExternalFilesDir(param0: string): javaioFile;
					public openOrCreateDatabase(param0: string, param1: number, param2: androiddatabasesqliteSQLiteDatabaseCursorFactory): androiddatabasesqliteSQLiteDatabase;
					public getExternalCacheDir(): javaioFile;
				}
			}
		}
	}
}

import javautilMap = java.util.Map;
import javautilzipZipFile = java.util.zip.ZipFile;
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.zip.ZipFile.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class FabricKitsFinder {
					public call(): javautilMap;
					public loadApkFile(): javautilzipZipFile;
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
import javalangException = java.lang.Exception;
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class InitializationCallback {
					/**
					 * Constructs a new instance of the io.fabric.sdk.android.InitializationCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						success(param0: javalangObject): void;
						failure(param0: javalangException): void;
						<clinit>(): void;
					});
					public static EMPTY: io.fabric.sdk.android.InitializationCallback;
					public failure(param0: javalangException): void;
					public success(param0: javalangObject): void;
				}
				export module InitializationCallback {
					export class Empty {
						public failure(param0: javalangException): void;
						public success(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class InitializationException {
					public constructor(param0: string, param1: javalangThrowable);
					public constructor(param0: string);
				}
			}
		}
	}
}

import javalangVoid = java.lang.Void;
/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.Dependency.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.Priority.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.Task.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class InitializationTask extends io.fabric.sdk.android.services.concurrency.PriorityAsyncTask {
					public isFinished(): boolean;
					public constructor(param0: io.fabric.sdk.android.Kit);
					public onPreExecute(): void;
					public doInBackground(param0: native.Array<javalangObject>): javalangObject;
					public addDependency(param0: javalangObject): void;
					public setFinished(param0: boolean): void;
					public getError(): javalangThrowable;
					public addDependency(param0: io.fabric.sdk.android.services.concurrency.Task): void;
					public getDependencies(): javautilCollection;
					public getPriority(): io.fabric.sdk.android.services.concurrency.Priority;
					public onCancelled(param0: javalangObject): void;
					public areDependenciesMet(): boolean;
					public setError(param0: javalangThrowable): void;
					public getDelegate(): io.fabric.sdk.android.services.concurrency.Dependency;
					public constructor();
					public onCancelled(): void;
					public onPostExecute(param0: javalangObject): void;
					public doInBackground(param0: native.Array<javalangVoid>): javalangObject;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./io.fabric.sdk.android.Fabric.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.IdManager.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export abstract class Kit {
					public getVersion(): string;
					public compareTo(param0: io.fabric.sdk.android.Kit): number;
					public doInBackground(): javalangObject;
					public onPreExecute(): boolean;
					public getIdManager(): io.fabric.sdk.android.services.common.IdManager;
					public getIdentifier(): string;
					public getPath(): string;
					public getDependencies(): javautilCollection;
					public onCancelled(param0: javalangObject): void;
					public constructor();
					public onPostExecute(param0: javalangObject): void;
					public getContext(): androidcontentContext;
					public getFabric(): io.fabric.sdk.android.Fabric;
				}
			}
		}
	}
}

/// <reference path="./java.util.Collection.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class KitGroup {
					/**
					 * Constructs a new instance of the io.fabric.sdk.android.KitGroup interface with the provided implementation.
					 */
					public constructor(implementation: {
						getKits(): javautilCollection;
					});
					public getKits(): javautilCollection;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class KitInfo {
					public getVersion(): string;
					public getIdentifier(): string;
					public constructor(param0: string, param1: string, param2: string);
					public getBuildType(): string;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class Logger {
					/**
					 * Constructs a new instance of the io.fabric.sdk.android.Logger interface with the provided implementation.
					 */
					public constructor(implementation: {
						isLoggable(param0: string, param1: number): boolean;
						getLogLevel(): number;
						setLogLevel(param0: number): void;
						d(param0: string, param1: string, param2: javalangThrowable): void;
						v(param0: string, param1: string, param2: javalangThrowable): void;
						i(param0: string, param1: string, param2: javalangThrowable): void;
						w(param0: string, param1: string, param2: javalangThrowable): void;
						e(param0: string, param1: string, param2: javalangThrowable): void;
						d(param0: string, param1: string): void;
						v(param0: string, param1: string): void;
						i(param0: string, param1: string): void;
						w(param0: string, param1: string): void;
						e(param0: string, param1: string): void;
						log(param0: number, param1: string, param2: string): void;
						log(param0: number, param1: string, param2: string, param3: boolean): void;
					});
					public i(param0: string, param1: string, param2: javalangThrowable): void;
					public getLogLevel(): number;
					public v(param0: string, param1: string, param2: javalangThrowable): void;
					public w(param0: string, param1: string, param2: javalangThrowable): void;
					public e(param0: string, param1: string, param2: javalangThrowable): void;
					public d(param0: string, param1: string, param2: javalangThrowable): void;
					public isLoggable(param0: string, param1: number): boolean;
					public d(param0: string, param1: string): void;
					public setLogLevel(param0: number): void;
					public e(param0: string, param1: string): void;
					public i(param0: string, param1: string): void;
					public log(param0: number, param1: string, param2: string, param3: boolean): void;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
					public log(param0: number, param1: string, param2: string): void;
				}
			}
		}
	}
}

import javautilconcurrentFuture = java.util.concurrent.Future;
import javalangBoolean = java.lang.Boolean;
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class Onboarding extends io.fabric.sdk.android.Kit {
					public constructor(param0: javautilconcurrentFuture, param1: javautilCollection);
					public getVersion(): string;
					public doInBackground(): javalangBoolean;
					public constructor();
					public doInBackground(): javalangObject;
					public onPreExecute(): boolean;
					public getIdentifier(): string;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class SilentLogger {
					public i(param0: string, param1: string, param2: javalangThrowable): void;
					public v(param0: string, param1: string, param2: javalangThrowable): void;
					public w(param0: string, param1: string, param2: javalangThrowable): void;
					public getLogLevel(): number;
					public e(param0: string, param1: string, param2: javalangThrowable): void;
					public d(param0: string, param1: string, param2: javalangThrowable): void;
					public isLoggable(param0: string, param1: number): boolean;
					public d(param0: string, param1: string): void;
					public e(param0: string, param1: string): void;
					public setLogLevel(param0: number): void;
					public constructor();
					public i(param0: string, param1: string): void;
					public log(param0: number, param1: string, param2: string, param3: boolean): void;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
					public log(param0: number, param1: string, param2: string): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.cache.ValueCache.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.cache.ValueLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module cache {
						export abstract class AbstractValueCache {
							public constructor();
							public doInvalidate(param0: androidcontentContext): void;
							public invalidate(param0: androidcontentContext): void;
							public constructor(param0: io.fabric.sdk.android.services.cache.ValueCache);
							public get(param0: androidcontentContext, param1: io.fabric.sdk.android.services.cache.ValueLoader): javalangObject;
							public cacheValue(param0: androidcontentContext, param1: javalangObject): void;
							public getCached(param0: androidcontentContext): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.cache.ValueCache.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.cache.ValueLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module cache {
						export class MemoryValueCache extends io.fabric.sdk.android.services.cache.AbstractValueCache {
							public constructor();
							public doInvalidate(param0: androidcontentContext): void;
							public invalidate(param0: androidcontentContext): void;
							public constructor(param0: io.fabric.sdk.android.services.cache.ValueCache);
							public cacheValue(param0: androidcontentContext, param1: javalangObject): void;
							public get(param0: androidcontentContext, param1: io.fabric.sdk.android.services.cache.ValueLoader): javalangObject;
							public getCached(param0: androidcontentContext): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.cache.ValueLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module cache {
						export class ValueCache {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.cache.ValueCache interface with the provided implementation.
							 */
							public constructor(implementation: {
								get(param0: androidcontentContext, param1: io.fabric.sdk.android.services.cache.ValueLoader): javalangObject;
								invalidate(param0: androidcontentContext): void;
							});
							public invalidate(param0: androidcontentContext): void;
							public get(param0: androidcontentContext, param1: io.fabric.sdk.android.services.cache.ValueLoader): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module cache {
						export class ValueLoader {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.cache.ValueLoader interface with the provided implementation.
							 */
							public constructor(implementation: {
								load(param0: androidcontentContext): javalangObject;
							});
							public load(param0: androidcontentContext): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpMethod.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequest.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequestFactory.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export abstract class AbstractSpiCall {
							public static HEADER_API_KEY: string;
							public static HEADER_DEVELOPER_TOKEN: string;
							public static HEADER_CLIENT_TYPE: string;
							public static HEADER_CLIENT_VERSION: string;
							public static HEADER_REQUEST_ID: string;
							public static HEADER_USER_AGENT: string;
							public static HEADER_ACCEPT: string;
							public static CRASHLYTICS_USER_AGENT: string;
							public static ACCEPT_JSON_VALUE: string;
							public static CLS_ANDROID_SDK_DEVELOPER_TOKEN: string;
							public static DEFAULT_TIMEOUT: number;
							public static ANDROID_CLIENT_TYPE: string;
							public kit: io.fabric.sdk.android.Kit;
							public getUrl(): string;
							public getHttpRequest(): io.fabric.sdk.android.services.network.HttpRequest;
							public getHttpRequest(param0: javautilMap): io.fabric.sdk.android.services.network.HttpRequest;
							public constructor(param0: io.fabric.sdk.android.Kit, param1: string, param2: string, param3: io.fabric.sdk.android.services.network.HttpRequestFactory, param4: io.fabric.sdk.android.services.network.HttpMethod);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class AdvertisingInfo {
							public advertisingId: string;
							public limitAdTrackingEnabled: boolean;
							public hashCode(): number;
							public equals(param0: javalangObject): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.AdvertisingInfo.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.AdvertisingInfoStrategy.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class AdvertisingInfoProvider {
							public getReflectionStrategy(): io.fabric.sdk.android.services.common.AdvertisingInfoStrategy;
							public constructor(param0: androidcontentContext);
							public getServiceStrategy(): io.fabric.sdk.android.services.common.AdvertisingInfoStrategy;
							public getAdvertisingInfo(): io.fabric.sdk.android.services.common.AdvertisingInfo;
							public getInfoFromPreferences(): io.fabric.sdk.android.services.common.AdvertisingInfo;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.AdvertisingInfo.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class AdvertisingInfoReflectionStrategy {
							public constructor(param0: androidcontentContext);
							public getAdvertisingInfo(): io.fabric.sdk.android.services.common.AdvertisingInfo;
						}
					}
				}
			}
		}
	}
}

import androidcontentComponentName = android.content.ComponentName;
import androidosIBinder = android.os.IBinder;
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.AdvertisingInfo.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class AdvertisingInfoServiceStrategy {
							public static GOOGLE_PLAY_SERVICES_INTENT: string;
							public static GOOGLE_PLAY_SERVICES_INTENT_PACKAGE_NAME: string;
							public constructor(param0: androidcontentContext);
							public getAdvertisingInfo(): io.fabric.sdk.android.services.common.AdvertisingInfo;
						}
						export module AdvertisingInfoServiceStrategy {
							export class AdvertisingConnection {
								public getBinder(): androidosIBinder;
								public onServiceDisconnected(param0: androidcontentComponentName): void;
								public onServiceConnected(param0: androidcontentComponentName, param1: androidosIBinder): void;
							}
							export class AdvertisingInterface {
								public static ADVERTISING_ID_SERVICE_INTERFACE_TOKEN: string;
								public isLimitAdTrackingEnabled(): boolean;
								public asBinder(): androidosIBinder;
								public getId(): string;
								public constructor(param0: androidosIBinder);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.common.AdvertisingInfo.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class AdvertisingInfoStrategy {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.common.AdvertisingInfoStrategy interface with the provided implementation.
							 */
							public constructor(implementation: {
								getAdvertisingInfo(): io.fabric.sdk.android.services.common.AdvertisingInfo;
							});
							public getAdvertisingInfo(): io.fabric.sdk.android.services.common.AdvertisingInfo;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class ApiKey {
							public constructor();
							public static getApiKey(param0: androidcontentContext, param1: boolean): string;
							public buildApiKeyInstructions(): string;
							public getApiKeyFromStrings(param0: androidcontentContext): string;
							public logErrorOrThrowException(param0: androidcontentContext): void;
							public static getApiKey(param0: androidcontentContext): string;
							public getApiKeyFromManifest(param0: androidcontentContext): string;
							public getValue(param0: androidcontentContext): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export abstract class BackgroundPriorityRunnable {
							public constructor();
							public onRun(): void;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

import androidappActivityManagerRunningAppProcessInfo = android.app.ActivityManager.RunningAppProcessInfo;
import javaioInputStream = java.io.InputStream;
import javalangFloat = java.lang.Float;
import javaxcryptoCipher = javax.crypto.Cipher;
import javaioCloseable = java.io.Closeable;
import javaioFlushable = java.io.Flushable;
import javaioOutputStream = java.io.OutputStream;
import androidviewView = android.view.View;
import javautilComparator = java.util.Comparator;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.io.Closeable.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.Flushable.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Float.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./javax.crypto.Cipher.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class CommonUtils {
							public static MD5_INSTANCE: string;
							public static SHA1_INSTANCE: string;
							public static GOOGLE_SDK: string;
							public static SDK: string;
							public static DEVICE_STATE_ISSIMULATOR: number;
							public static DEVICE_STATE_JAILBROKEN: number;
							public static DEVICE_STATE_DEBUGGERATTACHED: number;
							public static DEVICE_STATE_BETAOS: number;
							public static DEVICE_STATE_VENDORINTERNAL: number;
							public static DEVICE_STATE_COMPROMISEDLIBRARIES: number;
							public static FILE_MODIFIED_COMPARATOR: javautilComparator;
							public static isAppDebuggable(param0: androidcontentContext): boolean;
							public static logOrThrowIllegalArgumentException(param0: string, param1: string): void;
							public static getBatteryLevel(param0: androidcontentContext): javalangFloat;
							public static closeQuietly(param0: javaioCloseable): void;
							public static getStringsFileValue(param0: androidcontentContext, param1: string): string;
							public static createInstanceIdFrom(param0: native.Array<string>): string;
							public static finishAffinity(param0: androidappActivity, param1: number): void;
							public static logPriorityToString(param0: number): string;
							public static dehexify(param0: string): native.Array<number>;
							public static closeOrLog(param0: javaioCloseable, param1: string): void;
							public static isLoggingEnabled(param0: androidcontentContext): boolean;
							public static calculateUsedDiskSpaceInBytes(param0: string): number;
							public static isEmulator(param0: androidcontentContext): boolean;
							public static checkPermission(param0: androidcontentContext, param1: string): boolean;
							public static getAppProcessInfo(param0: string, param1: androidcontentContext): androidappActivityManagerRunningAppProcessInfo;
							public static getBatteryVelocity(param0: androidcontentContext, param1: boolean): number;
							public static finishAffinity(param0: androidcontentContext, param1: number): void;
							public static isClsTrace(param0: androidcontentContext): boolean;
							public static isDebuggerAttached(): boolean;
							public static getDeviceState(param0: androidcontentContext): number;
							public static logControlled(param0: androidcontentContext, param1: string): void;
							public static md5(param0: native.Array<number>): string;
							public static getResourcesIdentifier(param0: androidcontentContext, param1: string, param2: string): number;
							public static getSharedPrefs(param0: androidcontentContext): androidcontentSharedPreferences;
							public static calculateFreeRamInBytes(param0: androidcontentContext): number;
							public static streamToString(param0: javaioInputStream): string;
							public static getProximitySensorEnabled(param0: androidcontentContext): boolean;
							public static sha1(param0: javaioInputStream): string;
							public static isRooted(param0: androidcontentContext): boolean;
							public static hexify(param0: native.Array<number>): string;
							public static sha1(param0: native.Array<number>): string;
							public static copyStream(param0: javaioInputStream, param1: javaioOutputStream, param2: native.Array<number>): void;
							public static logControlledError(param0: androidcontentContext, param1: string, param2: javalangThrowable): void;
							public static canTryConnection(param0: androidcontentContext): boolean;
							public static extractFieldFromSystemFile(param0: javaioFile, param1: string): string;
							public static sha1(param0: string): string;
							public static logControlled(param0: androidcontentContext, param1: number, param2: string, param3: string): void;
							public static createCipher(param0: number, param1: string): javaxcryptoCipher;
							public static md5(param0: string): string;
							public static getAppIconResourceId(param0: androidcontentContext): number;
							public static logOrThrowIllegalStateException(param0: string, param1: string): void;
							public static padWithZerosToMaxIntWidth(param0: number): string;
							public static getResourcePackageName(param0: androidcontentContext): string;
							public constructor();
							public static isNullOrEmpty(param0: string): boolean;
							public static stringsEqualIncludingNull(param0: string, param1: string): boolean;
							public static openKeyboard(param0: androidcontentContext, param1: androidviewView): void;
							public static flushOrLog(param0: javaioFlushable, param1: string): void;
							public static getBooleanResourceValue(param0: androidcontentContext, param1: string, param2: boolean): boolean;
							public static getTotalRamInBytes(): number;
							public static hideKeyboard(param0: androidcontentContext, param1: androidviewView): void;
							public static resolveBuildId(param0: androidcontentContext): string;
							public static getCpuArchitectureInt(): number;
							public static getAppIconHashOrNull(param0: androidcontentContext): string;
						}
						export module CommonUtils {
							export class Architecture {
								public static X86_32: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static X86_64: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static ARM_UNKNOWN: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static PPC: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static PPC64: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static ARMV6: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static ARMV7: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static UNKNOWN: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static ARMV7S: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static ARM64: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static valueOf(param0: string): io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static values(): native.Array<io.fabric.sdk.android.services.common.CommonUtils.Architecture>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export abstract class Crash {
							public constructor(param0: string);
							public constructor(param0: string, param1: string);
							public getSessionId(): string;
							public getExceptionName(): string;
						}
						export module Crash {
							export class FatalException extends io.fabric.sdk.android.services.common.Crash {
								public constructor(param0: string, param1: string);
								public constructor(param0: string);
							}
							export class LoggedException extends io.fabric.sdk.android.services.common.Crash {
								public constructor(param0: string, param1: string);
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class CurrentTimeProvider {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.common.CurrentTimeProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								getCurrentTimeMillis(): number;
							});
							public getCurrentTimeMillis(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class DeliveryMechanism {
							public static DEVELOPER: io.fabric.sdk.android.services.common.DeliveryMechanism;
							public static USER_SIDELOAD: io.fabric.sdk.android.services.common.DeliveryMechanism;
							public static TEST_DISTRIBUTION: io.fabric.sdk.android.services.common.DeliveryMechanism;
							public static APP_STORE: io.fabric.sdk.android.services.common.DeliveryMechanism;
							public static BETA_APP_PACKAGE_NAME: string;
							public static valueOf(param0: string): io.fabric.sdk.android.services.common.DeliveryMechanism;
							public static determineFrom(param0: string): io.fabric.sdk.android.services.common.DeliveryMechanism;
							public getId(): number;
							public toString(): string;
							public static values(): native.Array<io.fabric.sdk.android.services.common.DeliveryMechanism>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.Map.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class DeviceIdentifierProvider {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.common.DeviceIdentifierProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								getDeviceIdentifiers(): javautilMap;
							});
							public getDeviceIdentifiers(): javautilMap;
						}
					}
				}
			}
		}
	}
}

import javautilconcurrentScheduledExecutorService = java.util.concurrent.ScheduledExecutorService;
import javautilconcurrentThreadFactory = java.util.concurrent.ThreadFactory;
import javautilconcurrentTimeUnit = java.util.concurrent.TimeUnit;
/// <reference path="./io.fabric.sdk.android.services.concurrency.internal.Backoff.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.internal.RetryPolicy.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.internal.RetryThreadPoolExecutor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.concurrent.ExecutorService.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
/// <reference path="./java.util.concurrent.ThreadFactory.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class ExecutorUtils {
							public static buildSingleThreadScheduledExecutorService(param0: string): javautilconcurrentScheduledExecutorService;
							public static addDelayedShutdownHook(param0: string, param1: javautilconcurrentExecutorService, param2: number, param3: javautilconcurrentTimeUnit): void;
							public static buildSingleThreadExecutorService(param0: string): javautilconcurrentExecutorService;
							public static getNamedThreadFactory(param0: string): javautilconcurrentThreadFactory;
							public static buildRetryThreadPoolExecutor(param0: string, param1: number, param2: io.fabric.sdk.android.services.concurrency.internal.RetryPolicy, param3: io.fabric.sdk.android.services.concurrency.internal.Backoff): io.fabric.sdk.android.services.concurrency.internal.RetryThreadPoolExecutor;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class IdManager {
							public static COLLECT_DEVICE_IDENTIFIERS: string;
							public static COLLECT_USER_IDENTIFIERS: string;
							public static DEFAULT_VERSION_NAME: string;
							public getWifiMacAddress(): string;
							public getTelephonyId(): string;
							public getDeviceUUID(): string;
							public getOsVersionString(): string;
							public getModelName(): string;
							public getAdvertisingId(): string;
							public getAndroidId(): string;
							public constructor(param0: androidcontentContext, param1: string, param2: string, param3: javautilCollection);
							public getAppIdentifier(): string;
							public getBluetoothMacAddress(): string;
							public getOsDisplayVersionString(): string;
							public canCollectUserIds(): boolean;
							public getOsBuildVersionString(): string;
							public getDeviceIdentifiers(): javautilMap;
							public getSerialNumber(): string;
							public createIdHeaderValue(param0: string, param1: string): string;
							public getAppInstallIdentifier(): string;
							public getInstallerPackageName(): string;
							public isLimitAdTrackingEnabled(): javalangBoolean;
						}
						export module IdManager {
							export class DeviceIdentifierType {
								public static WIFI_MAC_ADDRESS: io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
								public static BLUETOOTH_MAC_ADDRESS: io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
								public static FONT_TOKEN: io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
								public static ANDROID_ID: io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
								public static ANDROID_DEVICE_ID: io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
								public static ANDROID_SERIAL: io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
								public static ANDROID_ADVERTISING_ID: io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
								public protobufIndex: number;
								public static values(): native.Array<io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType>;
								public static valueOf(param0: string): io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class InstallerPackageNameProvider {
							public constructor();
							public getInstallerPackageName(param0: androidcontentContext): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class QueueFile {
							public peek(param0: io.fabric.sdk.android.services.common.QueueFile.ElementReader): void;
							public size(): number;
							public close(): void;
							public usedBytes(): number;
							public remove(): void;
							public clear(): void;
							public toString(): string;
							public peek(): native.Array<number>;
							public constructor(param0: javaioFile);
							public add(param0: native.Array<number>): void;
							public forEach(param0: io.fabric.sdk.android.services.common.QueueFile.ElementReader): void;
							public add(param0: native.Array<number>, param1: number, param2: number): void;
							public isEmpty(): boolean;
							public hasSpaceFor(param0: number, param1: number): boolean;
						}
						export module QueueFile {
							export class Element {
								public toString(): string;
							}
							export class ElementInputStream {
								public read(param0: native.Array<number>, param1: number, param2: number): number;
								public read(): number;
							}
							export class ElementReader {
								/**
								 * Constructs a new instance of the io.fabric.sdk.android.services.common.QueueFile$ElementReader interface with the provided implementation.
								 */
								public constructor(implementation: {
									read(param0: javaioInputStream, param1: number): void;
								});
								public read(param0: javaioInputStream, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class ResponseParser {
							public static ResponseActionDiscard: number;
							public static ResponseActionRetry: number;
							public constructor();
							public static parse(param0: number): number;
						}
					}
				}
			}
		}
	}
}

import androidwidgetToast = android.widget.Toast;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.widget.Toast.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class SafeToast {
							public constructor(param0: androidcontentContext);
							public static makeText(param0: androidcontentContext, param1: number, param2: number): androidwidgetToast;
							public show(): void;
							public static makeText(param0: androidcontentContext, param1: string, param2: number): androidwidgetToast;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class SystemCurrentTimeProvider {
							public constructor();
							public getCurrentTimeMillis(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class TimingMetric {
							public stopMeasuring(): void;
							public constructor(param0: string, param1: string);
							public startMeasuring(): void;
							public getDuration(): number;
						}
					}
				}
			}
		}
	}
}

import javautilconcurrentExecutor = java.util.concurrent.Executor;
import javalangRunnable = java.lang.Runnable;
import androidosMessage = android.os.Message;
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export abstract class AsyncTask {
							public static THREAD_POOL_EXECUTOR: javautilconcurrentExecutor;
							public static SERIAL_EXECUTOR: javautilconcurrentExecutor;
							public constructor();
							public onPreExecute(): void;
							public onPostExecute(param0: javalangObject): void;
							public get(param0: number, param1: javautilconcurrentTimeUnit): javalangObject;
							public onCancelled(): void;
							public cancel(param0: boolean): boolean;
							public isCancelled(): boolean;
							public static setDefaultExecutor(param0: javautilconcurrentExecutor): void;
							public get(): javalangObject;
							public static execute(param0: javalangRunnable): void;
							public publishProgress(param0: native.Array<javalangObject>): void;
							public getStatus(): io.fabric.sdk.android.services.concurrency.AsyncTask.Status;
							public doInBackground(param0: native.Array<javalangObject>): javalangObject;
							public onCancelled(param0: javalangObject): void;
							public static init(): void;
							public onProgressUpdate(param0: native.Array<javalangObject>): void;
							public execute(param0: native.Array<javalangObject>): io.fabric.sdk.android.services.concurrency.AsyncTask;
							public executeOnExecutor(param0: javautilconcurrentExecutor, param1: native.Array<javalangObject>): io.fabric.sdk.android.services.concurrency.AsyncTask;
						}
						export module AsyncTask {
							export class AsyncTaskResult {
							}
							export class InternalHandler {
								public constructor();
								public handleMessage(param0: androidosMessage): void;
							}
							export class SerialExecutor {
								public scheduleNext(): void;
								public execute(param0: javalangRunnable): void;
							}
							export class Status {
								public static PENDING: io.fabric.sdk.android.services.concurrency.AsyncTask.Status;
								public static RUNNING: io.fabric.sdk.android.services.concurrency.AsyncTask.Status;
								public static FINISHED: io.fabric.sdk.android.services.concurrency.AsyncTask.Status;
								public static values(): native.Array<io.fabric.sdk.android.services.concurrency.AsyncTask.Status>;
								public static valueOf(param0: string): io.fabric.sdk.android.services.concurrency.AsyncTask.Status;
							}
							export abstract class WorkerRunnable {
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.concurrency.Dependency.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export class DelegateProvider {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.concurrency.DelegateProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								getDelegate(): io.fabric.sdk.android.services.concurrency.Dependency;
							});
							public getDelegate(): io.fabric.sdk.android.services.concurrency.Dependency;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export class Dependency {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.concurrency.Dependency interface with the provided implementation.
							 */
							public constructor(implementation: {
								addDependency(param0: javalangObject): void;
								getDependencies(): javautilCollection;
								areDependenciesMet(): boolean;
							});
							public addDependency(param0: javalangObject): void;
							public getDependencies(): javautilCollection;
							public areDependenciesMet(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.concurrency.Dependency.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export class DependencyPriorityBlockingQueue {
							public constructor();
							public size(): number;
							public drainTo(param0: javautilCollection, param1: number): number;
							public take(): io.fabric.sdk.android.services.concurrency.Dependency;
							public clear(): void;
							public toArray(param0: native.Array<javalangObject>): native.Array<javalangObject>;
							public poll(param0: number, param1: javautilconcurrentTimeUnit): io.fabric.sdk.android.services.concurrency.Dependency;
							public poll(): io.fabric.sdk.android.services.concurrency.Dependency;
							public peek(): io.fabric.sdk.android.services.concurrency.Dependency;
							public drainTo(param0: javautilCollection): number;
							public removeAll(param0: javautilCollection): boolean;
							public contains(param0: javalangObject): boolean;
							public remove(param0: javalangObject): boolean;
							public recycleBlockedQueue(): void;
							public toArray(): native.Array<javalangObject>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Class.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export class DependsOn {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.concurrency.DependsOn interface with the provided implementation.
							 */
							public constructor(implementation: {
								value(): native.Array<javalangClass>;
							});
							public value(): native.Array<javalangClass>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export class Priority {
							public static LOW: io.fabric.sdk.android.services.concurrency.Priority;
							public static NORMAL: io.fabric.sdk.android.services.concurrency.Priority;
							public static HIGH: io.fabric.sdk.android.services.concurrency.Priority;
							public static IMMEDIATE: io.fabric.sdk.android.services.concurrency.Priority;
							public static values(): native.Array<io.fabric.sdk.android.services.concurrency.Priority>;
							public static valueOf(param0: string): io.fabric.sdk.android.services.concurrency.Priority;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.concurrency.AsyncTask.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.Dependency.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.Priority.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.PriorityAsyncTask.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.Task.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
/// <reference path="./java.util.concurrent.ExecutorService.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export abstract class PriorityAsyncTask extends io.fabric.sdk.android.services.concurrency.AsyncTask implements io.fabric.sdk.android.services.concurrency.Dependency, io.fabric.sdk.android.services.concurrency.PriorityProvider, io.fabric.sdk.android.services.concurrency.Task, io.fabric.sdk.android.services.concurrency.DelegateProvider {
							public constructor();
							public addDependency(param0: javalangObject): void;
							public executeOnExecutor(param0: javautilconcurrentExecutorService, param1: native.Array<javalangObject>): void;
							public setFinished(param0: boolean): void;
							public getPriority(): io.fabric.sdk.android.services.concurrency.Priority;
							public getError(): javalangThrowable;
							public addDependency(param0: io.fabric.sdk.android.services.concurrency.Task): void;
							public getDependencies(): javautilCollection;
							public setError(param0: javalangThrowable): void;
							public compareTo(param0: javalangObject): number;
							public areDependenciesMet(): boolean;
							public isFinished(): boolean;
							public executeOnExecutor(param0: javautilconcurrentExecutor, param1: native.Array<javalangObject>): io.fabric.sdk.android.services.concurrency.AsyncTask;
							public getDelegate(): io.fabric.sdk.android.services.concurrency.Dependency;
						}
						export module PriorityAsyncTask {
							export class ProxyExecutor {
								public constructor(param0: javautilconcurrentExecutor, param1: io.fabric.sdk.android.services.concurrency.PriorityAsyncTask);
								public execute(param0: javalangRunnable): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.concurrency.Priority.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.Task.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export abstract class PriorityCallable extends io.fabric.sdk.android.services.concurrency.PriorityTask {
							public constructor();
							public addDependency(param0: javalangObject): void;
							public getDependencies(): javautilCollection;
							public setError(param0: javalangThrowable): void;
							public setFinished(param0: boolean): void;
							public areDependenciesMet(): boolean;
							public getPriority(): io.fabric.sdk.android.services.concurrency.Priority;
							public isFinished(): boolean;
							public getError(): javalangThrowable;
							public addDependency(param0: io.fabric.sdk.android.services.concurrency.Task): void;
						}
					}
				}
			}
		}
	}
}

import javautilconcurrentCallable = java.util.concurrent.Callable;
/// <reference path="./io.fabric.sdk.android.services.concurrency.Dependency.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.Priority.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.Task.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.concurrent.Callable.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export class PriorityFutureTask {
							public addDependency(param0: javalangObject): void;
							public setFinished(param0: boolean): void;
							public getPriority(): io.fabric.sdk.android.services.concurrency.Priority;
							public getError(): javalangThrowable;
							public addDependency(param0: io.fabric.sdk.android.services.concurrency.Task): void;
							public constructor(param0: javautilconcurrentCallable);
							public getDependencies(): javautilCollection;
							public constructor(param0: javalangRunnable, param1: javalangObject);
							public setError(param0: javalangThrowable): void;
							public checkAndInitDelegate(param0: javalangObject): io.fabric.sdk.android.services.concurrency.Dependency;
							public compareTo(param0: javalangObject): number;
							public areDependenciesMet(): boolean;
							public isFinished(): boolean;
							public getDelegate(): io.fabric.sdk.android.services.concurrency.Dependency;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.concurrency.Priority.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export class PriorityProvider {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.concurrency.PriorityProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								getPriority(): io.fabric.sdk.android.services.concurrency.Priority;
							});
							public getPriority(): io.fabric.sdk.android.services.concurrency.Priority;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.concurrency.Priority.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.Task.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export abstract class PriorityRunnable extends io.fabric.sdk.android.services.concurrency.PriorityTask {
							public constructor();
							public addDependency(param0: javalangObject): void;
							public getDependencies(): javautilCollection;
							public setError(param0: javalangThrowable): void;
							public setFinished(param0: boolean): void;
							public areDependenciesMet(): boolean;
							public getPriority(): io.fabric.sdk.android.services.concurrency.Priority;
							public isFinished(): boolean;
							public getError(): javalangThrowable;
							public addDependency(param0: io.fabric.sdk.android.services.concurrency.Task): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.concurrency.Priority.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.Task.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export class PriorityTask {
							public constructor();
							public getDependencies(): javautilCollection;
							public addDependency(param0: javalangObject): void;
							public static isProperDelegate(param0: javalangObject): boolean;
							public setError(param0: javalangThrowable): void;
							public setFinished(param0: boolean): void;
							public areDependenciesMet(): boolean;
							public getPriority(): io.fabric.sdk.android.services.concurrency.Priority;
							public compareTo(param0: javalangObject): number;
							public isFinished(): boolean;
							public getError(): javalangThrowable;
							public addDependency(param0: io.fabric.sdk.android.services.concurrency.Task): void;
						}
					}
				}
			}
		}
	}
}

import javautilconcurrentRunnableFuture = java.util.concurrent.RunnableFuture;
import javalangThread = java.lang.Thread;
/// <reference path="./io.fabric.sdk.android.services.concurrency.DependencyPriorityBlockingQueue.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.concurrent.Callable.d.ts" />
/// <reference path="./java.util.concurrent.RunnableFuture.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export class PriorityThreadPoolExecutor {
							public static create(param0: number, param1: number): io.fabric.sdk.android.services.concurrency.PriorityThreadPoolExecutor;
							public execute(param0: javalangRunnable): void;
							public getQueue(): io.fabric.sdk.android.services.concurrency.DependencyPriorityBlockingQueue;
							public static create(param0: number): io.fabric.sdk.android.services.concurrency.PriorityThreadPoolExecutor;
							public newTaskFor(param0: javautilconcurrentCallable): javautilconcurrentRunnableFuture;
							public static create(): io.fabric.sdk.android.services.concurrency.PriorityThreadPoolExecutor;
							public newTaskFor(param0: javalangRunnable, param1: javalangObject): javautilconcurrentRunnableFuture;
							public afterExecute(param0: javalangRunnable, param1: javalangThrowable): void;
						}
						export module PriorityThreadPoolExecutor {
							export class PriorityThreadFactory {
								public constructor(param0: number);
								public newThread(param0: javalangRunnable): javalangThread;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export class Task {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.concurrency.Task interface with the provided implementation.
							 */
							public constructor(implementation: {
								setFinished(param0: boolean): void;
								isFinished(): boolean;
								setError(param0: javalangThrowable): void;
								getError(): javalangThrowable;
							});
							public setError(param0: javalangThrowable): void;
							public setFinished(param0: boolean): void;
							public isFinished(): boolean;
							public getError(): javalangThrowable;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export class UnmetDependencyException {
							public constructor();
							public constructor(param0: string);
							public constructor(param0: string, param1: javalangThrowable);
							public constructor(param0: javalangThrowable);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export module internal {
							export abstract class AbstractFuture {
								public interruptTask(): void;
								public isCancelled(): boolean;
								public constructor();
								public get(param0: number, param1: javautilconcurrentTimeUnit): javalangObject;
								public isDone(): boolean;
								public wasInterrupted(): boolean;
								public get(): javalangObject;
								public setException(param0: javalangThrowable): boolean;
								public cancel(param0: boolean): boolean;
								public set(param0: javalangObject): boolean;
							}
							export module AbstractFuture {
								export class Sync {
									public tryAcquireShared(param0: number): number;
									public tryReleaseShared(param0: number): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export module internal {
							export class Backoff {
								/**
								 * Constructs a new instance of the io.fabric.sdk.android.services.concurrency.internal.Backoff interface with the provided implementation.
								 */
								public constructor(implementation: {
									getDelayMillis(param0: number): number;
								});
								public getDelayMillis(param0: number): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export module internal {
							export class DefaultRetryPolicy {
								public constructor(param0: number);
								public constructor();
								public shouldRetry(param0: number, param1: javalangThrowable): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export module internal {
							export class ExponentialBackoff {
								public constructor(param0: number);
								public constructor(param0: number, param1: number);
								public getDelayMillis(param0: number): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export module internal {
							export class RetryFuture extends io.fabric.sdk.android.services.concurrency.internal.AbstractFuture {
								public interruptTask(): void;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export module internal {
							export class RetryPolicy {
								/**
								 * Constructs a new instance of the io.fabric.sdk.android.services.concurrency.internal.RetryPolicy interface with the provided implementation.
								 */
								public constructor(implementation: {
									shouldRetry(param0: number, param1: javalangThrowable): boolean;
								});
								public shouldRetry(param0: number, param1: javalangThrowable): boolean;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.concurrency.internal.Backoff.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.internal.RetryPolicy.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export module internal {
							export class RetryState {
								public constructor(param0: number, param1: io.fabric.sdk.android.services.concurrency.internal.Backoff, param2: io.fabric.sdk.android.services.concurrency.internal.RetryPolicy);
								public constructor(param0: io.fabric.sdk.android.services.concurrency.internal.Backoff, param1: io.fabric.sdk.android.services.concurrency.internal.RetryPolicy);
								public initialRetryState(): io.fabric.sdk.android.services.concurrency.internal.RetryState;
								public getBackoff(): io.fabric.sdk.android.services.concurrency.internal.Backoff;
								public getRetryPolicy(): io.fabric.sdk.android.services.concurrency.internal.RetryPolicy;
								public nextRetryState(): io.fabric.sdk.android.services.concurrency.internal.RetryState;
								public getRetryCount(): number;
								public getRetryDelay(): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.concurrency.internal.Backoff.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.concurrency.internal.RetryPolicy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.concurrent.Callable.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
/// <reference path="./java.util.concurrent.ThreadFactory.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export module internal {
							export class RetryThreadPoolExecutor {
								public constructor(param0: number, param1: io.fabric.sdk.android.services.concurrency.internal.RetryPolicy, param2: io.fabric.sdk.android.services.concurrency.internal.Backoff);
								public scheduleWithRetry(param0: javautilconcurrentCallable): javautilconcurrentFuture;
								public scheduleWithRetry(param0: javalangRunnable): javautilconcurrentFuture;
								public scheduleWithRetry(param0: javalangRunnable, param1: javalangObject): javautilconcurrentFuture;
								public constructor(param0: number, param1: javautilconcurrentThreadFactory, param2: io.fabric.sdk.android.services.concurrency.internal.RetryPolicy, param3: io.fabric.sdk.android.services.concurrency.internal.Backoff);
								public getBackoff(): io.fabric.sdk.android.services.concurrency.internal.Backoff;
								public getRetryPolicy(): io.fabric.sdk.android.services.concurrency.internal.RetryPolicy;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.events.FilesSender.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module events {
						export class DisabledEventsStrategy {
							public constructor();
							public deleteAllEvents(): void;
							public sendEvents(): void;
							public rollFileOver(): boolean;
							public recordEvent(param0: javalangObject): void;
							public scheduleTimeBasedRollOverIfNeeded(): void;
							public cancelTimeBasedFileRollOver(): void;
							public getFilesSender(): io.fabric.sdk.android.services.events.FilesSender;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.events.EventsFilesManager.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.events.FilesSender.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module events {
						export abstract class EnabledEventsStrategy {
							public context: androidcontentContext;
							public filesManager: io.fabric.sdk.android.services.events.EventsFilesManager;
							public deleteAllEvents(): void;
							public sendEvents(): void;
							public rollFileOver(): boolean;
							public scheduleTimeBasedRollOverIfNeeded(): void;
							public recordEvent(param0: javalangObject): void;
							public getRollover(): number;
							public cancelTimeBasedFileRollOver(): void;
							public getFilesSender(): io.fabric.sdk.android.services.events.FilesSender;
							public constructor(param0: androidcontentContext, param1: javautilconcurrentScheduledExecutorService, param2: io.fabric.sdk.android.services.events.EventsFilesManager);
							public configureRollover(param0: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module events {
						export class EventTransform {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.events.EventTransform interface with the provided implementation.
							 */
							public constructor(implementation: {
								toBytes(param0: javalangObject): native.Array<number>;
							});
							public toBytes(param0: javalangObject): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

import javautilList = java.util.List;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.CurrentTimeProvider.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.events.EventTransform.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.events.EventsStorage.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.events.EventsStorageListener.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module events {
						export abstract class EventsFilesManager {
							public static ROLL_OVER_FILE_NAME_SEPARATOR: string;
							public static MAX_BYTE_SIZE_PER_FILE: number;
							public static MAX_FILES_IN_BATCH: number;
							public static MAX_FILES_TO_KEEP: number;
							public context: androidcontentContext;
							public transform: io.fabric.sdk.android.services.events.EventTransform;
							public currentTimeProvider: io.fabric.sdk.android.services.common.CurrentTimeProvider;
							public eventStorage: io.fabric.sdk.android.services.events.EventsStorage;
							public lastRollOverTime: number;
							public rollOverListeners: javautilList;
							public registerRollOverListener(param0: io.fabric.sdk.android.services.events.EventsStorageListener): void;
							public deleteOldestInRollOverIfOverMax(): void;
							public constructor(param0: androidcontentContext, param1: io.fabric.sdk.android.services.events.EventTransform, param2: io.fabric.sdk.android.services.common.CurrentTimeProvider, param3: io.fabric.sdk.android.services.events.EventsStorage, param4: number);
							public deleteSentFiles(param0: javautilList): void;
							public rollFileOver(): boolean;
							public generateUniqueRollOverFileName(): string;
							public getLastRollOverTime(): number;
							public writeEvent(param0: javalangObject): void;
							public getMaxByteSizePerFile(): number;
							public deleteAllEventsFiles(): void;
							public getMaxFilesToKeep(): number;
							public getBatchOfFilesToSend(): javautilList;
							public parseCreationTimestampFromFileName(param0: string): number;
						}
						export module EventsFilesManager {
							export class FileWithTimestamp {
								public constructor(param0: javaioFile, param1: number);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.events.EventsFilesManager.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.events.EventsStrategy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module events {
						export abstract class EventsHandler {
							public context: androidcontentContext;
							public executor: javautilconcurrentScheduledExecutorService;
							public strategy: io.fabric.sdk.android.services.events.EventsStrategy;
							public recordEventSync(param0: javalangObject): void;
							public disable(): void;
							public executeAsync(param0: javalangRunnable): void;
							public getDisabledEventsStrategy(): io.fabric.sdk.android.services.events.EventsStrategy;
							public executeSync(param0: javalangRunnable): void;
							public onRollOver(param0: string): void;
							public recordEventAsync(param0: javalangObject, param1: boolean): void;
							public constructor(param0: androidcontentContext, param1: io.fabric.sdk.android.services.events.EventsStrategy, param2: io.fabric.sdk.android.services.events.EventsFilesManager, param3: javautilconcurrentScheduledExecutorService);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module events {
						export class EventsManager {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.events.EventsManager interface with the provided implementation.
							 */
							public constructor(implementation: {
								sendEvents(): void;
								deleteAllEvents(): void;
								recordEvent(param0: javalangObject): void;
							});
							public deleteAllEvents(): void;
							public sendEvents(): void;
							public recordEvent(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module events {
						export class EventsStorage {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.events.EventsStorage interface with the provided implementation.
							 */
							public constructor(implementation: {
								add(param0: native.Array<number>): void;
								getWorkingFileUsedSizeInBytes(): number;
								isWorkingFileEmpty(): boolean;
								rollOver(param0: string): void;
								getWorkingDirectory(): javaioFile;
								getRollOverDirectory(): javaioFile;
								getBatchOfFilesToSend(param0: number): javautilList;
								getAllFilesInRollOverDirectory(): javautilList;
								deleteFilesInRollOverDirectory(param0: javautilList): void;
								deleteWorkingFile(): void;
								canWorkingFileStore(param0: number, param1: number): boolean;
							});
							public isWorkingFileEmpty(): boolean;
							public getWorkingFileUsedSizeInBytes(): number;
							public getWorkingDirectory(): javaioFile;
							public getAllFilesInRollOverDirectory(): javautilList;
							public rollOver(param0: string): void;
							public add(param0: native.Array<number>): void;
							public getBatchOfFilesToSend(param0: number): javautilList;
							public deleteFilesInRollOverDirectory(param0: javautilList): void;
							public deleteWorkingFile(): void;
							public canWorkingFileStore(param0: number, param1: number): boolean;
							public getRollOverDirectory(): javaioFile;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module events {
						export class EventsStorageListener {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.events.EventsStorageListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onRollOver(param0: string): void;
							});
							public onRollOver(param0: string): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.events.FilesSender.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module events {
						export class EventsStrategy {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.events.EventsStrategy interface with the provided implementation.
							 */
							public constructor(implementation: {
								getFilesSender(): io.fabric.sdk.android.services.events.FilesSender;
								rollFileOver(): boolean;
								scheduleTimeBasedRollOverIfNeeded(): void;
								cancelTimeBasedFileRollOver(): void;
								sendEvents(): void;
								deleteAllEvents(): void;
								recordEvent(param0: javalangObject): void;
							});
							public deleteAllEvents(): void;
							public rollFileOver(): boolean;
							public sendEvents(): void;
							public scheduleTimeBasedRollOverIfNeeded(): void;
							public recordEvent(param0: javalangObject): void;
							public cancelTimeBasedFileRollOver(): void;
							public getFilesSender(): io.fabric.sdk.android.services.events.FilesSender;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module events {
						export class FileRollOverManager {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.events.FileRollOverManager interface with the provided implementation.
							 */
							public constructor(implementation: {
								rollFileOver(): boolean;
								scheduleTimeBasedRollOverIfNeeded(): void;
								cancelTimeBasedFileRollOver(): void;
							});
							public rollFileOver(): boolean;
							public scheduleTimeBasedRollOverIfNeeded(): void;
							public cancelTimeBasedFileRollOver(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module events {
						export class FilesSender {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.events.FilesSender interface with the provided implementation.
							 */
							public constructor(implementation: {
								send(param0: javautilList): boolean;
							});
							public send(param0: javautilList): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module events {
						export class GZIPQueueFileEventStorage extends io.fabric.sdk.android.services.events.QueueFileEventStorage {
							public isWorkingFileEmpty(): boolean;
							public getWorkingFileUsedSizeInBytes(): number;
							public getWorkingDirectory(): javaioFile;
							public getAllFilesInRollOverDirectory(): javautilList;
							public constructor(param0: androidcontentContext, param1: javaioFile, param2: string, param3: string);
							public getBatchOfFilesToSend(param0: number): javautilList;
							public deleteWorkingFile(): void;
							public canWorkingFileStore(param0: number, param1: number): boolean;
							public getRollOverDirectory(): javaioFile;
							public rollOver(param0: string): void;
							public add(param0: native.Array<number>): void;
							public deleteFilesInRollOverDirectory(param0: javautilList): void;
							public getMoveOutputStream(param0: javaioFile): javaioOutputStream;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module events {
						export class QueueFileEventStorage {
							public isWorkingFileEmpty(): boolean;
							public getWorkingFileUsedSizeInBytes(): number;
							public getWorkingDirectory(): javaioFile;
							public getAllFilesInRollOverDirectory(): javautilList;
							public constructor(param0: androidcontentContext, param1: javaioFile, param2: string, param3: string);
							public getBatchOfFilesToSend(param0: number): javautilList;
							public deleteWorkingFile(): void;
							public canWorkingFileStore(param0: number, param1: number): boolean;
							public getRollOverDirectory(): javaioFile;
							public rollOver(param0: string): void;
							public add(param0: native.Array<number>): void;
							public deleteFilesInRollOverDirectory(param0: javautilList): void;
							public getMoveOutputStream(param0: javaioFile): javaioOutputStream;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.events.FileRollOverManager.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module events {
						export class TimeBasedFileRollOverRunnable {
							public constructor(param0: androidcontentContext, param1: io.fabric.sdk.android.services.events.FileRollOverManager);
							public run(): void;
						}
					}
				}
			}
		}
	}
}

import javasecuritycertX509Certificate = java.security.cert.X509Certificate;
/// <reference path="./io.fabric.sdk.android.services.network.SystemKeyStore.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module network {
						export class CertificateChainCleaner {
							public static getCleanChain(param0: native.Array<javasecuritycertX509Certificate>, param1: io.fabric.sdk.android.services.network.SystemKeyStore): native.Array<javasecuritycertX509Certificate>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.Logger.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpMethod.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequest.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.PinningInfoProvider.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module network {
						export class DefaultHttpRequestFactory {
							public constructor();
							public getPinningInfoProvider(): io.fabric.sdk.android.services.network.PinningInfoProvider;
							public buildHttpRequest(param0: io.fabric.sdk.android.services.network.HttpMethod, param1: string, param2: javautilMap): io.fabric.sdk.android.services.network.HttpRequest;
							public setPinningInfoProvider(param0: io.fabric.sdk.android.services.network.PinningInfoProvider): void;
							public buildHttpRequest(param0: io.fabric.sdk.android.services.network.HttpMethod, param1: string): io.fabric.sdk.android.services.network.HttpRequest;
							public constructor(param0: io.fabric.sdk.android.Logger);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module network {
						export class HttpMethod {
							public static GET: io.fabric.sdk.android.services.network.HttpMethod;
							public static POST: io.fabric.sdk.android.services.network.HttpMethod;
							public static PUT: io.fabric.sdk.android.services.network.HttpMethod;
							public static DELETE: io.fabric.sdk.android.services.network.HttpMethod;
							public static values(): native.Array<io.fabric.sdk.android.services.network.HttpMethod>;
							public static valueOf(param0: string): io.fabric.sdk.android.services.network.HttpMethod;
						}
					}
				}
			}
		}
	}
}

import javanetURL = java.net.URL;
import javanetHttpURLConnection = java.net.HttpURLConnection;
import javautilconcurrentatomicAtomicInteger = java.util.concurrent.atomic.AtomicInteger;
import javaioByteArrayOutputStream = java.io.ByteArrayOutputStream;
import javautilconcurrentatomicAtomicReference = java.util.concurrent.atomic.AtomicReference;
import javaioBufferedInputStream = java.io.BufferedInputStream;
import javaioInputStreamReader = java.io.InputStreamReader;
import javaioBufferedReader = java.io.BufferedReader;
import javaioPrintStream = java.io.PrintStream;
import javalangAppendable = java.lang.Appendable;
import javaioWriter = java.io.Writer;
import javalangNumber = java.lang.Number;
import javautilMapEntry = java.util.Map.Entry;
import javaioReader = java.io.Reader;
import javaioOutputStreamWriter = java.io.OutputStreamWriter;
import javanetProxy = java.net.Proxy;
import javaioIOException = java.io.IOException;
/// <reference path="./java.io.BufferedInputStream.d.ts" />
/// <reference path="./java.io.BufferedReader.d.ts" />
/// <reference path="./java.io.ByteArrayOutputStream.d.ts" />
/// <reference path="./java.io.Closeable.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.Flushable.d.ts" />
/// <reference path="./java.io.IOException.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.InputStreamReader.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.io.OutputStreamWriter.d.ts" />
/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Appendable.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.HttpURLConnection.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.concurrent.atomic.AtomicInteger.d.ts" />
/// <reference path="./java.util.concurrent.atomic.AtomicReference.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module network {
						export class HttpRequest {
							public static CHARSET_UTF8: string;
							public static CONTENT_TYPE_FORM: string;
							public static CONTENT_TYPE_JSON: string;
							public static ENCODING_GZIP: string;
							public static HEADER_ACCEPT: string;
							public static HEADER_ACCEPT_CHARSET: string;
							public static HEADER_ACCEPT_ENCODING: string;
							public static HEADER_AUTHORIZATION: string;
							public static HEADER_CACHE_CONTROL: string;
							public static HEADER_CONTENT_ENCODING: string;
							public static HEADER_CONTENT_LENGTH: string;
							public static HEADER_CONTENT_TYPE: string;
							public static HEADER_DATE: string;
							public static HEADER_ETAG: string;
							public static HEADER_EXPIRES: string;
							public static HEADER_IF_NONE_MATCH: string;
							public static HEADER_LAST_MODIFIED: string;
							public static HEADER_LOCATION: string;
							public static HEADER_PROXY_AUTHORIZATION: string;
							public static HEADER_REFERER: string;
							public static HEADER_SERVER: string;
							public static HEADER_USER_AGENT: string;
							public static METHOD_DELETE: string;
							public static METHOD_GET: string;
							public static METHOD_HEAD: string;
							public static METHOD_OPTIONS: string;
							public static METHOD_POST: string;
							public static METHOD_PUT: string;
							public static METHOD_TRACE: string;
							public static PARAM_CHARSET: string;
							public part(param0: string, param1: javaioFile): io.fabric.sdk.android.services.network.HttpRequest;
							public uncompress(param0: boolean): io.fabric.sdk.android.services.network.HttpRequest;
							public static proxyHost(param0: string): void;
							public static get(param0: javanetURL): io.fabric.sdk.android.services.network.HttpRequest;
							public chunk(param0: number): io.fabric.sdk.android.services.network.HttpRequest;
							public parameter(param0: string, param1: string): string;
							public openOutput(): io.fabric.sdk.android.services.network.HttpRequest;
							public useProxy(param0: string, param1: number): io.fabric.sdk.android.services.network.HttpRequest;
							public bufferSize(param0: number): io.fabric.sdk.android.services.network.HttpRequest;
							public part(param0: string, param1: string, param2: string, param3: javaioInputStream): io.fabric.sdk.android.services.network.HttpRequest;
							public static head(param0: string, param1: javautilMap, param2: boolean): io.fabric.sdk.android.services.network.HttpRequest;
							public static put(param0: string, param1: javautilMap, param2: boolean): io.fabric.sdk.android.services.network.HttpRequest;
							public code(param0: javautilconcurrentatomicAtomicInteger): io.fabric.sdk.android.services.network.HttpRequest;
							public ok(): boolean;
							public send(param0: javaioReader): io.fabric.sdk.android.services.network.HttpRequest;
							public code(): number;
							public receive(param0: javaioFile): io.fabric.sdk.android.services.network.HttpRequest;
							public receive(param0: javalangAppendable): io.fabric.sdk.android.services.network.HttpRequest;
							public contentType(): string;
							public form(param0: javalangObject, param1: javalangObject): io.fabric.sdk.android.services.network.HttpRequest;
							public message(): string;
							public connectTimeout(param0: number): io.fabric.sdk.android.services.network.HttpRequest;
							public startPart(): io.fabric.sdk.android.services.network.HttpRequest;
							public static keepAlive(param0: boolean): void;
							public disconnect(): io.fabric.sdk.android.services.network.HttpRequest;
							public static put(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public intHeader(param0: string): number;
							public eTag(): string;
							public static post(param0: javanetURL): io.fabric.sdk.android.services.network.HttpRequest;
							public headers(param0: string): native.Array<string>;
							public receive(param0: javaioOutputStream): io.fabric.sdk.android.services.network.HttpRequest;
							public bufferSize(): number;
							public headers(param0: javautilMap): io.fabric.sdk.android.services.network.HttpRequest;
							public acceptCharset(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public send(param0: javaioFile): io.fabric.sdk.android.services.network.HttpRequest;
							public url(): javanetURL;
							public part(param0: string, param1: string, param2: string, param3: javaioFile): io.fabric.sdk.android.services.network.HttpRequest;
							public toString(): string;
							public contentEncoding(): string;
							public date(): number;
							public static post(param0: string, param1: boolean, param2: native.Array<javalangObject>): io.fabric.sdk.android.services.network.HttpRequest;
							public static delete(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public static put(param0: string, param1: boolean, param2: native.Array<javalangObject>): io.fabric.sdk.android.services.network.HttpRequest;
							public dateHeader(param0: string): number;
							public send(param0: native.Array<number>): io.fabric.sdk.android.services.network.HttpRequest;
							public reader(param0: string): javaioInputStreamReader;
							public accept(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public closeOutput(): io.fabric.sdk.android.services.network.HttpRequest;
							public form(param0: javautilMapEntry, param1: string): io.fabric.sdk.android.services.network.HttpRequest;
							public proxyAuthorization(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public bytes(): native.Array<number>;
							public static delete(param0: string, param1: boolean, param2: native.Array<javalangObject>): io.fabric.sdk.android.services.network.HttpRequest;
							public cacheControl(): string;
							public closeOutputQuietly(): io.fabric.sdk.android.services.network.HttpRequest;
							public copy(param0: javaioInputStream, param1: javaioOutputStream): io.fabric.sdk.android.services.network.HttpRequest;
							public constructor(param0: javanetURL, param1: string);
							public part(param0: string, param1: javalangNumber): io.fabric.sdk.android.services.network.HttpRequest;
							public acceptEncoding(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public static post(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public intHeader(param0: string, param1: number): number;
							public proxyBasic(param0: string, param1: string): io.fabric.sdk.android.services.network.HttpRequest;
							public getParam(param0: string, param1: string): string;
							public static get(param0: string, param1: javautilMap, param2: boolean): io.fabric.sdk.android.services.network.HttpRequest;
							public writePartHeader(param0: string, param1: string): io.fabric.sdk.android.services.network.HttpRequest;
							public form(param0: javautilMapEntry): io.fabric.sdk.android.services.network.HttpRequest;
							public method(): string;
							public static encode(param0: string): string;
							public buffer(): javaioBufferedInputStream;
							public badRequest(): boolean;
							public dateHeader(param0: string, param1: number): number;
							public trustAllHosts(): io.fabric.sdk.android.services.network.HttpRequest;
							public byteStream(): javaioByteArrayOutputStream;
							public body(param0: javautilconcurrentatomicAtomicReference): io.fabric.sdk.android.services.network.HttpRequest;
							public contentLength(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public part(param0: string, param1: string, param2: javaioFile): io.fabric.sdk.android.services.network.HttpRequest;
							public send(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public part(param0: string, param1: string, param2: string, param3: string): io.fabric.sdk.android.services.network.HttpRequest;
							public expires(): number;
							public static get(param0: string, param1: boolean, param2: native.Array<javalangObject>): io.fabric.sdk.android.services.network.HttpRequest;
							public static delete(param0: javanetURL): io.fabric.sdk.android.services.network.HttpRequest;
							public basic(param0: string, param1: string): io.fabric.sdk.android.services.network.HttpRequest;
							public bufferedReader(param0: string): javaioBufferedReader;
							public static nonProxyHosts(param0: native.Array<string>): void;
							public serverError(): boolean;
							public stream(): javaioInputStream;
							public part(param0: string, param1: javaioInputStream): io.fabric.sdk.android.services.network.HttpRequest;
							public header(param0: javautilMapEntry): io.fabric.sdk.android.services.network.HttpRequest;
							public partHeader(param0: string, param1: string): io.fabric.sdk.android.services.network.HttpRequest;
							public static head(param0: string, param1: boolean, param2: native.Array<javalangObject>): io.fabric.sdk.android.services.network.HttpRequest;
							public body(): string;
							public getParams(param0: string): javautilMap;
							public ignoreCloseExceptions(): boolean;
							public static options(param0: javanetURL): io.fabric.sdk.android.services.network.HttpRequest;
							public static trace(param0: javanetURL): io.fabric.sdk.android.services.network.HttpRequest;
							public static append(param0: string, param1: javautilMap): string;
							public static put(param0: javanetURL): io.fabric.sdk.android.services.network.HttpRequest;
							public writePartHeader(param0: string, param1: string, param2: string): io.fabric.sdk.android.services.network.HttpRequest;
							public static options(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public referer(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public ignoreCloseExceptions(param0: boolean): io.fabric.sdk.android.services.network.HttpRequest;
							public body(param0: string): string;
							public form(param0: javautilMap, param1: string): io.fabric.sdk.android.services.network.HttpRequest;
							public notModified(): boolean;
							public header(param0: string, param1: javalangNumber): io.fabric.sdk.android.services.network.HttpRequest;
							public userAgent(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public reader(): javaioInputStreamReader;
							public form(param0: javalangObject, param1: javalangObject, param2: string): io.fabric.sdk.android.services.network.HttpRequest;
							public part(param0: string, param1: string, param2: javalangNumber): io.fabric.sdk.android.services.network.HttpRequest;
							public static append(param0: string, param1: native.Array<javalangObject>): string;
							public contentType(param0: string, param1: string): io.fabric.sdk.android.services.network.HttpRequest;
							public form(param0: javautilMap): io.fabric.sdk.android.services.network.HttpRequest;
							public trustAllCerts(): io.fabric.sdk.android.services.network.HttpRequest;
							public writer(): javaioOutputStreamWriter;
							public static head(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public static head(param0: javanetURL): io.fabric.sdk.android.services.network.HttpRequest;
							public created(): boolean;
							public part(param0: string, param1: string, param2: string): io.fabric.sdk.android.services.network.HttpRequest;
							public lastModified(): number;
							public body(param0: javautilconcurrentatomicAtomicReference, param1: string): io.fabric.sdk.android.services.network.HttpRequest;
							public server(): string;
							public contentType(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public static setConnectionFactory(param0: io.fabric.sdk.android.services.network.HttpRequest.ConnectionFactory): void;
							public followRedirects(param0: boolean): io.fabric.sdk.android.services.network.HttpRequest;
							public static post(param0: string, param1: javautilMap, param2: boolean): io.fabric.sdk.android.services.network.HttpRequest;
							public receive(param0: javaioPrintStream): io.fabric.sdk.android.services.network.HttpRequest;
							public receive(param0: javaioWriter): io.fabric.sdk.android.services.network.HttpRequest;
							public contentLength(): number;
							public part(param0: string, param1: string): io.fabric.sdk.android.services.network.HttpRequest;
							public static trace(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public header(param0: string, param1: string): io.fabric.sdk.android.services.network.HttpRequest;
							public header(param0: string): string;
							public bufferedReader(): javaioBufferedReader;
							public acceptJson(): io.fabric.sdk.android.services.network.HttpRequest;
							public acceptGzipEncoding(): io.fabric.sdk.android.services.network.HttpRequest;
							public constructor(param0: string, param1: string);
							public getConnection(): javanetHttpURLConnection;
							public static delete(param0: string, param1: javautilMap, param2: boolean): io.fabric.sdk.android.services.network.HttpRequest;
							public ifNoneMatch(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public charset(): string;
							public static proxyPort(param0: number): void;
							public copy(param0: javaioReader, param1: javaioWriter): io.fabric.sdk.android.services.network.HttpRequest;
							public location(): string;
							public parameters(param0: string): javautilMap;
							public useCaches(param0: boolean): io.fabric.sdk.android.services.network.HttpRequest;
							public isBodyEmpty(): boolean;
							public contentLength(param0: number): io.fabric.sdk.android.services.network.HttpRequest;
							public send(param0: javaioInputStream): io.fabric.sdk.android.services.network.HttpRequest;
							public notFound(): boolean;
							public readTimeout(param0: number): io.fabric.sdk.android.services.network.HttpRequest;
							public authorization(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public static get(param0: string): io.fabric.sdk.android.services.network.HttpRequest;
							public headers(): javautilMap;
							public ifModifiedSince(param0: number): io.fabric.sdk.android.services.network.HttpRequest;
						}
						export module HttpRequest {
							export class Base64 {
								public static encodeBytes(param0: native.Array<number>, param1: number, param2: number): string;
								public static encode(param0: string): string;
								public static encodeBytes(param0: native.Array<number>): string;
								public static encodeBytesToBytes(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
							}
							export abstract class CloseOperation extends io.fabric.sdk.android.services.network.HttpRequest.Operation {
								public constructor();
								public done(): void;
								public constructor(param0: javaioCloseable, param1: boolean);
							}
							export class ConnectionFactory {
								/**
								 * Constructs a new instance of the io.fabric.sdk.android.services.network.HttpRequest$ConnectionFactory interface with the provided implementation.
								 */
								public constructor(implementation: {
									create(param0: javanetURL): javanetHttpURLConnection;
									create(param0: javanetURL, param1: javanetProxy): javanetHttpURLConnection;
									<clinit>(): void;
								});
								public static DEFAULT: io.fabric.sdk.android.services.network.HttpRequest.ConnectionFactory;
								public create(param0: javanetURL, param1: javanetProxy): javanetHttpURLConnection;
								public create(param0: javanetURL): javanetHttpURLConnection;
							}
							export abstract class FlushOperation extends io.fabric.sdk.android.services.network.HttpRequest.Operation {
								public constructor();
								public done(): void;
								public constructor(param0: javaioFlushable);
							}
							export class HttpRequestException {
								public getCause(): javaioIOException;
								public constructor(param0: javaioIOException);
							}
							export abstract class Operation {
								public call(): javalangObject;
								public constructor();
								public done(): void;
								public run(): javalangObject;
							}
							export class RequestOutputStream {
								public write(param0: string): io.fabric.sdk.android.services.network.HttpRequest.RequestOutputStream;
								public constructor(param0: javaioOutputStream, param1: string, param2: number);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.network.HttpMethod.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequest.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.PinningInfoProvider.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module network {
						export class HttpRequestFactory {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.network.HttpRequestFactory interface with the provided implementation.
							 */
							public constructor(implementation: {
								setPinningInfoProvider(param0: io.fabric.sdk.android.services.network.PinningInfoProvider): void;
								getPinningInfoProvider(): io.fabric.sdk.android.services.network.PinningInfoProvider;
								buildHttpRequest(param0: io.fabric.sdk.android.services.network.HttpMethod, param1: string): io.fabric.sdk.android.services.network.HttpRequest;
								buildHttpRequest(param0: io.fabric.sdk.android.services.network.HttpMethod, param1: string, param2: javautilMap): io.fabric.sdk.android.services.network.HttpRequest;
							});
							public getPinningInfoProvider(): io.fabric.sdk.android.services.network.PinningInfoProvider;
							public buildHttpRequest(param0: io.fabric.sdk.android.services.network.HttpMethod, param1: string, param2: javautilMap): io.fabric.sdk.android.services.network.HttpRequest;
							public setPinningInfoProvider(param0: io.fabric.sdk.android.services.network.PinningInfoProvider): void;
							public buildHttpRequest(param0: io.fabric.sdk.android.services.network.HttpMethod, param1: string): io.fabric.sdk.android.services.network.HttpRequest;
						}
					}
				}
			}
		}
	}
}

import javaxnetsslSSLSocketFactory = javax.net.ssl.SSLSocketFactory;
/// <reference path="./io.fabric.sdk.android.services.network.PinningInfoProvider.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocketFactory.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module network {
						export class NetworkUtils {
							public static getSSLSocketFactory(param0: io.fabric.sdk.android.services.network.PinningInfoProvider): javaxnetsslSSLSocketFactory;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module network {
						export class PinningInfoProvider {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.network.PinningInfoProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								getKeyStoreStream(): javaioInputStream;
								getKeyStorePassword(): string;
								getPins(): native.Array<string>;
								getPinCreationTimeInMillis(): number;
							});
							public static PIN_CREATION_TIME_UNDEFINED: number;
							public getKeyStorePassword(): string;
							public getPinCreationTimeInMillis(): number;
							public getPins(): native.Array<string>;
							public getKeyStoreStream(): javaioInputStream;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.network.PinningInfoProvider.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.SystemKeyStore.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module network {
						export class PinningTrustManager {
							public checkClientTrusted(param0: native.Array<javasecuritycertX509Certificate>, param1: string): void;
							public checkServerTrusted(param0: native.Array<javasecuritycertX509Certificate>, param1: string): void;
							public getAcceptedIssuers(): native.Array<javasecuritycertX509Certificate>;
							public constructor(param0: io.fabric.sdk.android.services.network.SystemKeyStore, param1: io.fabric.sdk.android.services.network.PinningInfoProvider);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module network {
						export class SystemKeyStore {
							public constructor(param0: javaioInputStream, param1: string);
							public isTrustRoot(param0: javasecuritycertX509Certificate): boolean;
							public getTrustRootFor(param0: javasecuritycertX509Certificate): javasecuritycertX509Certificate;
						}
					}
				}
			}
		}
	}
}

import javanetURI = java.net.URI;
import javautilTreeMap = java.util.TreeMap;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.util.TreeMap.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module network {
						export class UrlUtils {
							public static UTF8: string;
							public static getQueryParams(param0: string, param1: boolean): javautilTreeMap;
							public static getQueryParams(param0: javanetURI, param1: boolean): javautilTreeMap;
							public static urlEncode(param0: string): string;
							public static percentEncode(param0: string): string;
							public static urlDecode(param0: string): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.File.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module persistence {
						export class FileStore {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.persistence.FileStore interface with the provided implementation.
							 */
							public constructor(implementation: {
								getCacheDir(): javaioFile;
								getExternalCacheDir(): javaioFile;
								getFilesDir(): javaioFile;
								getExternalFilesDir(): javaioFile;
							});
							public getCacheDir(): javaioFile;
							public getExternalFilesDir(): javaioFile;
							public getExternalCacheDir(): javaioFile;
							public getFilesDir(): javaioFile;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./java.io.File.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module persistence {
						export class FileStoreImpl {
							public getCacheDir(): javaioFile;
							public getExternalFilesDir(): javaioFile;
							public getExternalCacheDir(): javaioFile;
							public constructor(param0: io.fabric.sdk.android.Kit);
							public getFilesDir(): javaioFile;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module persistence {
						export class PersistenceStrategy {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.persistence.PersistenceStrategy interface with the provided implementation.
							 */
							public constructor(implementation: {
								save(param0: javalangObject): void;
								restore(): javalangObject;
								clear(): void;
							});
							public clear(): void;
							public save(param0: javalangObject): void;
							public restore(): javalangObject;
						}
					}
				}
			}
		}
	}
}

import androidcontentSharedPreferencesEditor = android.content.SharedPreferences.Editor;
/// <reference path="./android.content.SharedPreferences.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module persistence {
						export class PreferenceStore {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.persistence.PreferenceStore interface with the provided implementation.
							 */
							public constructor(implementation: {
								get(): androidcontentSharedPreferences;
								edit(): androidcontentSharedPreferencesEditor;
								save(param0: androidcontentSharedPreferencesEditor): boolean;
							});
							public get(): androidcontentSharedPreferences;
							public edit(): androidcontentSharedPreferencesEditor;
							public save(param0: androidcontentSharedPreferencesEditor): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module persistence {
						export class PreferenceStoreImpl {
							public get(): androidcontentSharedPreferences;
							public edit(): androidcontentSharedPreferencesEditor;
							public save(param0: androidcontentSharedPreferencesEditor): boolean;
							public constructor(param0: io.fabric.sdk.android.Kit);
							public constructor(param0: androidcontentContext, param1: string);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.persistence.PreferenceStore.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.persistence.SerializationStrategy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module persistence {
						export class PreferenceStoreStrategy {
							public constructor(param0: io.fabric.sdk.android.services.persistence.PreferenceStore, param1: io.fabric.sdk.android.services.persistence.SerializationStrategy, param2: string);
							public clear(): void;
							public save(param0: javalangObject): void;
							public restore(): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module persistence {
						export class SerializationStrategy {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.persistence.SerializationStrategy interface with the provided implementation.
							 */
							public constructor(implementation: {
								serialize(param0: javalangObject): string;
								deserialize(param0: string): javalangObject;
							});
							public deserialize(param0: string): javalangObject;
							public serialize(param0: javalangObject): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpMethod.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequestFactory.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.AppRequestData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export abstract class AbstractAppSpiCall extends io.fabric.sdk.android.services.common.AbstractSpiCall implements io.fabric.sdk.android.services.settings.AppSpiCall {
							public static APP_IDENTIFIER_PARAM: string;
							public static APP_NAME_PARAM: string;
							public static APP_INSTANCE_IDENTIFIER_PARAM: string;
							public static APP_DISPLAY_VERSION_PARAM: string;
							public static APP_BUILD_VERSION_PARAM: string;
							public static APP_SOURCE_PARAM: string;
							public static APP_MIN_SDK_VERSION_PARAM: string;
							public static APP_BUILT_SDK_VERSION_PARAM: string;
							public static APP_ICON_HASH_PARAM: string;
							public static APP_ICON_DATA_PARAM: string;
							public static APP_ICON_WIDTH_PARAM: string;
							public static APP_ICON_HEIGHT_PARAM: string;
							public static APP_ICON_PRERENDERED_PARAM: string;
							public static APP_SDK_MODULES_PARAM_PREFIX: string;
							public static APP_SDK_MODULES_PARAM_VERSION: string;
							public static APP_SDK_MODULES_PARAM_BUILD_TYPE: string;
							public constructor(param0: io.fabric.sdk.android.Kit, param1: string, param2: string, param3: io.fabric.sdk.android.services.network.HttpRequestFactory, param4: io.fabric.sdk.android.services.network.HttpMethod);
							public invoke(param0: io.fabric.sdk.android.services.settings.AppRequestData): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class AnalyticsSettingsData {
							public analyticsURL: string;
							public flushIntervalSeconds: number;
							public maxByteSizePerFile: number;
							public maxFileCountPerSend: number;
							public maxPendingSendFileCount: number;
							public trackCustomEvents: boolean;
							public trackPredefinedEvents: boolean;
							public flushOnBackground: boolean;
							public samplingRate: number;
							public static DEFAULT_SAMPLING_RATE: number;
							public constructor(param0: string, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number);
							public constructor(param0: string, param1: number, param2: number, param3: number, param4: number, param5: boolean);
							public constructor(param0: string, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: boolean, param7: number, param8: boolean);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class AppIconSettingsData {
							public hash: string;
							public width: number;
							public height: number;
							public constructor(param0: string, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.settings.IconRequest.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class AppRequestData {
							public apiKey: string;
							public appId: string;
							public displayVersion: string;
							public buildVersion: string;
							public instanceIdentifier: string;
							public name: string;
							public source: number;
							public minSdkVersion: string;
							public builtSdkVersion: string;
							public icon: io.fabric.sdk.android.services.settings.IconRequest;
							public sdkKits: javautilCollection;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: number, param7: string, param8: string, param9: io.fabric.sdk.android.services.settings.IconRequest, param10: javautilCollection);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.settings.AppIconSettingsData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class AppSettingsData {
							public static STATUS_NEW: string;
							public static STATUS_CONFIGURED: string;
							public static STATUS_ACTIVATED: string;
							public identifier: string;
							public status: string;
							public url: string;
							public reportsUrl: string;
							public updateRequired: boolean;
							public icon: io.fabric.sdk.android.services.settings.AppIconSettingsData;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: boolean, param5: io.fabric.sdk.android.services.settings.AppIconSettingsData);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.settings.AppRequestData.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class AppSpiCall {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.settings.AppSpiCall interface with the provided implementation.
							 */
							public constructor(implementation: {
								invoke(param0: io.fabric.sdk.android.services.settings.AppRequestData): boolean;
							});
							public invoke(param0: io.fabric.sdk.android.services.settings.AppRequestData): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class BetaSettingsData {
							public updateUrl: string;
							public updateSuspendDurationSeconds: number;
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

import orgjsonJSONObject = org.json.JSONObject;
/// <reference path="./org.json.JSONObject.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class CachedSettingsIo {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.settings.CachedSettingsIo interface with the provided implementation.
							 */
							public constructor(implementation: {
								readCachedSettings(): orgjsonJSONObject;
								writeCachedSettings(param0: number, param1: orgjsonJSONObject): void;
							});
							public readCachedSettings(): orgjsonJSONObject;
							public writeCachedSettings(param0: number, param1: orgjsonJSONObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpMethod.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequestFactory.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.AppRequestData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class CreateAppSpiCall extends io.fabric.sdk.android.services.settings.AbstractAppSpiCall {
							public constructor(param0: io.fabric.sdk.android.Kit, param1: string, param2: string, param3: io.fabric.sdk.android.services.network.HttpRequestFactory, param4: io.fabric.sdk.android.services.network.HttpMethod);
							public constructor(param0: io.fabric.sdk.android.Kit, param1: string, param2: string, param3: io.fabric.sdk.android.services.network.HttpRequestFactory);
							public invoke(param0: io.fabric.sdk.android.services.settings.AppRequestData): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class DefaultCachedSettingsIo {
							public readCachedSettings(): orgjsonJSONObject;
							public writeCachedSettings(param0: number, param1: orgjsonJSONObject): void;
							public constructor(param0: io.fabric.sdk.android.Kit);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.CurrentTimeProvider.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.CachedSettingsIo.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.SettingsCacheBehavior.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.SettingsData.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.SettingsJsonTransform.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.SettingsRequest.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.SettingsSpiCall.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class DefaultSettingsController {
							public constructor(param0: io.fabric.sdk.android.Kit, param1: io.fabric.sdk.android.services.settings.SettingsRequest, param2: io.fabric.sdk.android.services.common.CurrentTimeProvider, param3: io.fabric.sdk.android.services.settings.SettingsJsonTransform, param4: io.fabric.sdk.android.services.settings.CachedSettingsIo, param5: io.fabric.sdk.android.services.settings.SettingsSpiCall);
							public loadSettingsData(): io.fabric.sdk.android.services.settings.SettingsData;
							public loadSettingsData(param0: io.fabric.sdk.android.services.settings.SettingsCacheBehavior): io.fabric.sdk.android.services.settings.SettingsData;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.common.CurrentTimeProvider.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.SettingsData.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class DefaultSettingsJsonTransform {
							public toJson(param0: io.fabric.sdk.android.services.settings.SettingsData): orgjsonJSONObject;
							public buildFromJson(param0: io.fabric.sdk.android.services.common.CurrentTimeProvider, param1: orgjsonJSONObject): io.fabric.sdk.android.services.settings.SettingsData;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpMethod.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequestFactory.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.SettingsRequest.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class DefaultSettingsSpiCall extends io.fabric.sdk.android.services.common.AbstractSpiCall implements io.fabric.sdk.android.services.settings.SettingsSpiCall {
							public invoke(param0: io.fabric.sdk.android.services.settings.SettingsRequest): orgjsonJSONObject;
							public constructor(param0: io.fabric.sdk.android.Kit, param1: string, param2: string, param3: io.fabric.sdk.android.services.network.HttpRequestFactory, param4: io.fabric.sdk.android.services.network.HttpMethod);
							public constructor(param0: io.fabric.sdk.android.Kit, param1: string, param2: string, param3: io.fabric.sdk.android.services.network.HttpRequestFactory);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class FeaturesSettingsData {
							public promptEnabled: boolean;
							public collectLoggedException: boolean;
							public collectReports: boolean;
							public collectAnalytics: boolean;
							public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class IconRequest {
							public hash: string;
							public iconResourceId: number;
							public width: number;
							public height: number;
							public constructor(param0: string, param1: number, param2: number, param3: number);
							public static build(param0: androidcontentContext, param1: string): io.fabric.sdk.android.services.settings.IconRequest;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class PromptSettingsData {
							public title: string;
							public message: string;
							public sendButtonTitle: string;
							public showCancelButton: boolean;
							public cancelButtonTitle: string;
							public showAlwaysSendButton: boolean;
							public alwaysSendButtonTitle: string;
							public constructor(param0: string, param1: string, param2: string, param3: boolean, param4: string, param5: boolean, param6: string);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class SessionSettingsData {
							public logBufferSize: number;
							public maxChainedExceptionDepth: number;
							public maxCustomExceptionEvents: number;
							public maxCustomKeyValuePairs: number;
							public identifierMask: number;
							public sendSessionWithoutCrash: boolean;
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.IdManager.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequestFactory.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.SettingsController.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.SettingsData.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class Settings {
							public static SETTINGS_CACHE_FILENAME: string;
							public static getInstance(): io.fabric.sdk.android.services.settings.Settings;
							public withSettings(param0: io.fabric.sdk.android.services.settings.Settings.SettingsAccess, param1: javalangObject): javalangObject;
							public loadSettingsData(): boolean;
							public loadSettingsSkippingCache(): boolean;
							public initialize(param0: io.fabric.sdk.android.Kit, param1: io.fabric.sdk.android.services.common.IdManager, param2: io.fabric.sdk.android.services.network.HttpRequestFactory, param3: string, param4: string, param5: string): io.fabric.sdk.android.services.settings.Settings;
							public clearSettings(): void;
							public setSettingsController(param0: io.fabric.sdk.android.services.settings.SettingsController): void;
							public awaitSettingsData(): io.fabric.sdk.android.services.settings.SettingsData;
						}
						export module Settings {
							export class LazyHolder {
							}
							export class SettingsAccess {
								/**
								 * Constructs a new instance of the io.fabric.sdk.android.services.settings.Settings$SettingsAccess interface with the provided implementation.
								 */
								public constructor(implementation: {
									usingSettings(param0: io.fabric.sdk.android.services.settings.SettingsData): javalangObject;
								});
								public usingSettings(param0: io.fabric.sdk.android.services.settings.SettingsData): javalangObject;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class SettingsCacheBehavior {
							public static USE_CACHE: io.fabric.sdk.android.services.settings.SettingsCacheBehavior;
							public static SKIP_CACHE_LOOKUP: io.fabric.sdk.android.services.settings.SettingsCacheBehavior;
							public static IGNORE_CACHE_EXPIRATION: io.fabric.sdk.android.services.settings.SettingsCacheBehavior;
							public static values(): native.Array<io.fabric.sdk.android.services.settings.SettingsCacheBehavior>;
							public static valueOf(param0: string): io.fabric.sdk.android.services.settings.SettingsCacheBehavior;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.settings.SettingsCacheBehavior.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.SettingsData.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class SettingsController {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.settings.SettingsController interface with the provided implementation.
							 */
							public constructor(implementation: {
								loadSettingsData(): io.fabric.sdk.android.services.settings.SettingsData;
								loadSettingsData(param0: io.fabric.sdk.android.services.settings.SettingsCacheBehavior): io.fabric.sdk.android.services.settings.SettingsData;
							});
							public loadSettingsData(): io.fabric.sdk.android.services.settings.SettingsData;
							public loadSettingsData(param0: io.fabric.sdk.android.services.settings.SettingsCacheBehavior): io.fabric.sdk.android.services.settings.SettingsData;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.settings.AnalyticsSettingsData.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.AppSettingsData.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.BetaSettingsData.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.FeaturesSettingsData.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.PromptSettingsData.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.SessionSettingsData.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class SettingsData {
							public appData: io.fabric.sdk.android.services.settings.AppSettingsData;
							public sessionData: io.fabric.sdk.android.services.settings.SessionSettingsData;
							public promptData: io.fabric.sdk.android.services.settings.PromptSettingsData;
							public featuresData: io.fabric.sdk.android.services.settings.FeaturesSettingsData;
							public analyticsSettingsData: io.fabric.sdk.android.services.settings.AnalyticsSettingsData;
							public betaSettingsData: io.fabric.sdk.android.services.settings.BetaSettingsData;
							public expiresAtMillis: number;
							public settingsVersion: number;
							public cacheDuration: number;
							public constructor(param0: number, param1: io.fabric.sdk.android.services.settings.AppSettingsData, param2: io.fabric.sdk.android.services.settings.SessionSettingsData, param3: io.fabric.sdk.android.services.settings.PromptSettingsData, param4: io.fabric.sdk.android.services.settings.FeaturesSettingsData, param5: io.fabric.sdk.android.services.settings.AnalyticsSettingsData, param6: io.fabric.sdk.android.services.settings.BetaSettingsData, param7: number, param8: number);
							public isExpired(param0: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class SettingsJsonConstants {
							public static EXPIRES_AT_KEY: string;
							public static APP_KEY: string;
							public static ANALYTICS_KEY: string;
							public static BETA_KEY: string;
							public static SESSION_KEY: string;
							public static PROMPT_KEY: string;
							public static SETTINGS_VERSION: string;
							public static FEATURES_KEY: string;
							public static CACHE_DURATION_KEY: string;
							public static SETTINGS_VERSION_DEFAULT: number;
							public static ANALYTICS_URL_KEY: string;
							public static ANALYTICS_FLUSH_INTERVAL_SECS_KEY: string;
							public static ANALYTICS_MAX_BYTE_SIZE_PER_FILE_KEY: string;
							public static ANALYTICS_MAX_FILE_COUNT_PER_SEND_KEY: string;
							public static ANALYTICS_MAX_PENDING_SEND_FILE_COUNT_KEY: string;
							public static ANALYTICS_TRACK_CUSTOM_EVENTS_KEY: string;
							public static ANALYTICS_TRACK_PREDEFINED_EVENTS_KEY: string;
							public static ANALYTICS_SAMPLING_RATE_KEY: string;
							public static ANALYTICS_FLUSH_ON_BACKGROUND_KEY: string;
							public static ANALYTICS_URL_DEFAULT: string;
							public static ANALYTICS_FLUSH_INTERVAL_SECS_DEFAULT: number;
							public static ANALYTICS_MAX_BYTE_SIZE_PER_FILE_DEFAULT: number;
							public static ANALYTICS_MAX_FILE_COUNT_PER_SEND_DEFAULT: number;
							public static ANALYTICS_MAX_PENDING_SEND_FILE_COUNT_DEFAULT: number;
							public static ANALYTICS_TRACK_CUSTOM_EVENTS_DEFAULT: boolean;
							public static ANALYTICS_TRACK_PREDEFINED_EVENTS_DEFAULT: boolean;
							public static ANALYTICS_FLUSH_ON_BACKGROUND_DEFAULT: boolean;
							public static ANALYTICS_SAMPLING_RATE_DEFAULT: number;
							public static BETA_UPDATE_ENDPOINT: string;
							public static BETA_UPDATE_SUSPEND_DURATION: string;
							public static BETA_UPDATE_ENDPOINT_DEFAULT: string;
							public static BETA_UPDATE_SUSPEND_DURATION_DEFAULT: number;
							public static FEATURES_PROMPT_ENABLED_KEY: string;
							public static FEATURES_COLLECT_REPORTS_KEY: string;
							public static FEATURES_COLLECT_LOGGED_EXCEPTIONS_KEY: string;
							public static FEATURES_COLLECT_ANALYTICS_KEY: string;
							public static FEATURES_PROMPT_ENABLED_DEFAULT: boolean;
							public static FEATURES_COLLECT_REPORTS_DEFAULT: boolean;
							public static FEATURES_COLLECT_LOGGED_EXCEPTIONS_DEFAULT: boolean;
							public static FEATURES_COLLECT_ANALYTICS_DEFAULT: boolean;
							public static APP_IDENTIFIER_KEY: string;
							public static APP_STATUS_KEY: string;
							public static APP_URL_KEY: string;
							public static APP_REPORTS_URL_KEY: string;
							public static APP_UPDATE_REQUIRED_KEY: string;
							public static APP_ICON_KEY: string;
							public static APP_UPDATE_REQUIRED_DEFAULT: boolean;
							public static ICON_HASH_KEY: string;
							public static ICON_WIDTH_KEY: string;
							public static ICON_HEIGHT_KEY: string;
							public static ICON_PRERENDERED_KEY: string;
							public static SETTINGS_LOG_BUFFER_SIZE_KEY: string;
							public static SETTINGS_MAX_CHAINED_EXCEPTION_DEPTH_KEY: string;
							public static SETTINGS_MAX_CUSTOM_EXCEPTION_EVENTS_KEY: string;
							public static SETTINGS_MAX_CUSTOM_KEY_VALUE_PAIRS_KEY: string;
							public static SETTINGS_IDENTIFIER_MASK_KEY: string;
							public static SETTINGS_SEND_SESSION_WITHOUT_CRASH_KEY: string;
							public static SETTINGS_CACHE_DURATION_DEFAULT: number;
							public static SETTINGS_LOG_BUFFER_SIZE_DEFAULT: number;
							public static SETTINGS_MAX_CHAINED_EXCEPTION_DEPTH_DEFAULT: number;
							public static SETTINGS_MAX_CUSTOM_EXCEPTION_EVENTS_DEFAULT: number;
							public static SETTINGS_MAX_CUSTOM_KEY_VALUE_PAIRS_DEFAULT: number;
							public static SETTINGS_IDENTIFIER_MASK_DEFAULT: number;
							public static SETTINGS_SEND_SESSION_WITHOUT_CRASH_DEFAULT: boolean;
							public static PROMPT_TITLE_KEY: string;
							public static PROMPT_MESSAGE_KEY: string;
							public static PROMPT_SEND_BUTTON_TITLE_KEY: string;
							public static PROMPT_SHOW_CANCEL_BUTTON_KEY: string;
							public static PROMPT_CANCEL_BUTTON_TITLE_KEY: string;
							public static PROMPT_SHOW_ALWAYS_SEND_BUTTON_KEY: string;
							public static PROMPT_ALWAYS_SEND_BUTTON_TITLE_KEY: string;
							public static PROMPT_TITLE_DEFAULT: string;
							public static PROMPT_MESSAGE_DEFAULT: string;
							public static PROMPT_SHOW_CANCEL_BUTTON_DEFAULT: boolean;
							public static PROMPT_SHOW_ALWAYS_SEND_BUTTON_DEFAULT: boolean;
							public static PROMPT_SEND_BUTTON_TITLE_DEFAULT: string;
							public static PROMPT_ALWAYS_SEND_BUTTON_TITLE_DEFAULT: string;
							public static PROMPT_CANCEL_BUTTON_TITLE_DEFAULT: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.common.CurrentTimeProvider.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.SettingsData.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class SettingsJsonTransform {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.settings.SettingsJsonTransform interface with the provided implementation.
							 */
							public constructor(implementation: {
								buildFromJson(param0: io.fabric.sdk.android.services.common.CurrentTimeProvider, param1: orgjsonJSONObject): io.fabric.sdk.android.services.settings.SettingsData;
								toJson(param0: io.fabric.sdk.android.services.settings.SettingsData): orgjsonJSONObject;
							});
							public toJson(param0: io.fabric.sdk.android.services.settings.SettingsData): orgjsonJSONObject;
							public buildFromJson(param0: io.fabric.sdk.android.services.common.CurrentTimeProvider, param1: orgjsonJSONObject): io.fabric.sdk.android.services.settings.SettingsData;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class SettingsRequest {
							public apiKey: string;
							public deviceModel: string;
							public osBuildVersion: string;
							public osDisplayVersion: string;
							public advertisingId: string;
							public installationId: string;
							public androidId: string;
							public instanceId: string;
							public displayVersion: string;
							public buildVersion: string;
							public source: number;
							public iconHash: string;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: number, param11: string);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.settings.SettingsRequest.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class SettingsSpiCall {
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.settings.SettingsSpiCall interface with the provided implementation.
							 */
							public constructor(implementation: {
								invoke(param0: io.fabric.sdk.android.services.settings.SettingsRequest): orgjsonJSONObject;
							});
							public invoke(param0: io.fabric.sdk.android.services.settings.SettingsRequest): orgjsonJSONObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpMethod.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequestFactory.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.AppRequestData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module settings {
						export class UpdateAppSpiCall extends io.fabric.sdk.android.services.settings.AbstractAppSpiCall {
							public constructor(param0: io.fabric.sdk.android.Kit, param1: string, param2: string, param3: io.fabric.sdk.android.services.network.HttpRequestFactory, param4: io.fabric.sdk.android.services.network.HttpMethod);
							public constructor(param0: io.fabric.sdk.android.Kit, param1: string, param2: string, param3: io.fabric.sdk.android.services.network.HttpRequestFactory);
							public invoke(param0: io.fabric.sdk.android.services.settings.AppRequestData): boolean;
						}
					}
				}
			}
		}
	}
}

