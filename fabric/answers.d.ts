/// <reference path="./_helpers.d.ts" />
import javamathBigDecimal = java.math.BigDecimal;
import javautilCurrency = java.util.Currency;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.util.Currency.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class AddToCartEvent extends com.crashlytics.android.answers.PredefinedEvent {
					public putItemPrice(param0: javamathBigDecimal): com.crashlytics.android.answers.AddToCartEvent;
					public constructor();
					public putItemType(param0: string): com.crashlytics.android.answers.AddToCartEvent;
					public putItemName(param0: string): com.crashlytics.android.answers.AddToCartEvent;
					public putCurrency(param0: javautilCurrency): com.crashlytics.android.answers.AddToCartEvent;
					public putItemId(param0: string): com.crashlytics.android.answers.AddToCartEvent;
				}
			}
		}
	}
}

import iofabricsdkandroidservicescommonCrashLoggedException = io.fabric.sdk.android.services.common.Crash.LoggedException;
import iofabricsdkandroidservicescommonCrashFatalException = io.fabric.sdk.android.services.common.Crash.FatalException;
import javalangBoolean = java.lang.Boolean;
/// <reference path="./com.crashlytics.android.answers.AddToCartEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.ContentViewEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.CustomEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.InviteEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.LevelEndEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.LevelStartEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.LoginEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.PurchaseEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.RatingEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.SearchEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.ShareEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.SignUpEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.StartCheckoutEvent.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class Answers {
					public static TAG: string;
					public logSearch(param0: com.crashlytics.android.answers.SearchEvent): void;
					public getVersion(): string;
					public static getInstance(): com.crashlytics.android.answers.Answers;
					public onException(param0: iofabricsdkandroidservicescommonCrashFatalException): void;
					public onException(param0: iofabricsdkandroidservicescommonCrashLoggedException): void;
					public onPreExecute(): boolean;
					public getIdentifier(): string;
					public logLevelEnd(param0: com.crashlytics.android.answers.LevelEndEvent): void;
					public logCustom(param0: com.crashlytics.android.answers.CustomEvent): void;
					public logLogin(param0: com.crashlytics.android.answers.LoginEvent): void;
					public logAddToCart(param0: com.crashlytics.android.answers.AddToCartEvent): void;
					public logContentView(param0: com.crashlytics.android.answers.ContentViewEvent): void;
					public logSignUp(param0: com.crashlytics.android.answers.SignUpEvent): void;
					public doInBackground(): javalangBoolean;
					public constructor();
					public logRating(param0: com.crashlytics.android.answers.RatingEvent): void;
					public logStartCheckout(param0: com.crashlytics.android.answers.StartCheckoutEvent): void;
					public logInvite(param0: com.crashlytics.android.answers.InviteEvent): void;
					public logPurchase(param0: com.crashlytics.android.answers.PurchaseEvent): void;
					public logLevelStart(param0: com.crashlytics.android.answers.LevelStartEvent): void;
					public logShare(param0: com.crashlytics.android.answers.ShareEvent): void;
				}
			}
		}
	}
}

/// <reference path="./com.crashlytics.android.answers.AnswersEventValidator.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class AnswersAttributes {
					public toString(): string;
					public constructor(param0: com.crashlytics.android.answers.AnswersEventValidator);
				}
			}
		}
	}
}

import javalangNumber = java.lang.Number;
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export abstract class AnswersEvent {
					public static MAX_STRING_LENGTH: number;
					public static MAX_NUM_ATTRIBUTES: number;
					public putCustomAttribute(param0: string, param1: string): com.crashlytics.android.answers.AnswersEvent;
					public constructor();
					public putCustomAttribute(param0: string, param1: javalangNumber): com.crashlytics.android.answers.AnswersEvent;
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
import javautilMap = java.util.Map;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class AnswersEventValidator {
					public isNull(param0: javalangObject, param1: string): boolean;
					public constructor(param0: number, param1: number, param2: boolean);
					public isFullMap(param0: javautilMap, param1: string): boolean;
					public limitStringLength(param0: string): string;
				}
			}
		}
	}
}

import iofabricsdkandroidKit = io.fabric.sdk.android.Kit;
import androidcontentContext = android.content.Context;
import iofabricsdkandroidservicesnetworkHttpRequestFactory = io.fabric.sdk.android.services.network.HttpRequestFactory;
import javautilconcurrentScheduledExecutorService = java.util.concurrent.ScheduledExecutorService;
import iofabricsdkandroidservicessettingsAnalyticsSettingsData = io.fabric.sdk.android.services.settings.AnalyticsSettingsData;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.crashlytics.android.answers.AnswersFilesManagerProvider.d.ts" />
/// <reference path="./com.crashlytics.android.answers.SessionMetadataCollector.d.ts" />
/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequestFactory.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.AnalyticsSettingsData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class AnswersEventsHandler {
					public onRollOver(param0: string): void;
					public flushEvents(): void;
					public disable(): void;
					public processEventAsyncAndFlush(param0: com.crashlytics.android.answers.SessionEvent.Builder): void;
					public processEventSync(param0: com.crashlytics.android.answers.SessionEvent.Builder): void;
					public setAnalyticsSettingsData(param0: iofabricsdkandroidservicessettingsAnalyticsSettingsData, param1: string): void;
					public processEventAsync(param0: com.crashlytics.android.answers.SessionEvent.Builder): void;
					public constructor(param0: iofabricsdkandroidKit, param1: androidcontentContext, param2: com.crashlytics.android.answers.AnswersFilesManagerProvider, param3: com.crashlytics.android.answers.SessionMetadataCollector, param4: iofabricsdkandroidservicesnetworkHttpRequestFactory, param5: javautilconcurrentScheduledExecutorService);
					public enable(): void;
				}
			}
		}
	}
}

import iofabricsdkandroidservicespersistenceFileStore = io.fabric.sdk.android.services.persistence.FileStore;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.crashlytics.android.answers.SessionAnalyticsFilesManager.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.persistence.FileStore.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class AnswersFilesManagerProvider {
					public constructor(param0: androidcontentContext, param1: iofabricsdkandroidservicespersistenceFileStore);
					public getAnalyticsFilesManager(): com.crashlytics.android.answers.SessionAnalyticsFilesManager;
				}
			}
		}
	}
}

import androidappActivity = android.app.Activity;
import androidosBundle = android.os.Bundle;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.crashlytics.android.answers.BackgroundManager.d.ts" />
/// <reference path="./com.crashlytics.android.answers.SessionAnalyticsManager.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class AnswersLifecycleCallbacks {
					public onActivityDestroyed(param0: androidappActivity): void;
					public onActivityCreated(param0: androidappActivity, param1: androidosBundle): void;
					public onActivityStarted(param0: androidappActivity): void;
					public constructor(param0: com.crashlytics.android.answers.SessionAnalyticsManager, param1: com.crashlytics.android.answers.BackgroundManager);
					public onActivityPaused(param0: androidappActivity): void;
					public onActivityStopped(param0: androidappActivity): void;
					public onActivitySaveInstanceState(param0: androidappActivity, param1: androidosBundle): void;
					public onActivityResumed(param0: androidappActivity): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class AnswersPreferenceManager {
					public setAnalyticsLaunched(): void;
					public static build(param0: androidcontentContext): com.crashlytics.android.answers.AnswersPreferenceManager;
					public hasAnalyticsLaunched(): boolean;
				}
			}
		}
	}
}

import javautilList = java.util.List;
/// <reference path="./com.crashlytics.android.answers.SessionAnalyticsFilesSender.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class AnswersRetryFilesSender {
					public send(param0: javautilList): boolean;
					public static build(param0: com.crashlytics.android.answers.SessionAnalyticsFilesSender): com.crashlytics.android.answers.AnswersRetryFilesSender;
				}
			}
		}
	}
}

/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class BackgroundManager {
					public constructor(param0: javautilconcurrentScheduledExecutorService);
					public onActivityPaused(): void;
					public registerListener(param0: com.crashlytics.android.answers.BackgroundManager.Listener): void;
					public onActivityResumed(): void;
					public setFlushOnBackground(param0: boolean): void;
				}
				export module BackgroundManager {
					export class Listener {
						/**
						 * Constructs a new instance of the com.crashlytics.android.answers.BackgroundManager$Listener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onBackground(): void;
						});
						public onBackground(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module crashlytics {
		export module android {
			export module answers {
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

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class ContentViewEvent extends com.crashlytics.android.answers.PredefinedEvent {
					public putContentName(param0: string): com.crashlytics.android.answers.ContentViewEvent;
					public constructor();
					public putContentId(param0: string): com.crashlytics.android.answers.ContentViewEvent;
					public putContentType(param0: string): com.crashlytics.android.answers.ContentViewEvent;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class CustomEvent extends com.crashlytics.android.answers.AnswersEvent {
					public toString(): string;
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.settings.AnalyticsSettingsData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class DisabledSessionAnalyticsManagerStrategy {
					public scheduleTimeBasedRollOverIfNeeded(): void;
					public rollFileOver(): boolean;
					public cancelTimeBasedFileRollOver(): void;
					public processEvent(param0: com.crashlytics.android.answers.SessionEvent.Builder): void;
					public setAnalyticsSettingsData(param0: iofabricsdkandroidservicessettingsAnalyticsSettingsData, param1: string): void;
					public sendEvents(): void;
					public deleteAllEvents(): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.crashlytics.android.answers.SessionAnalyticsFilesManager.d.ts" />
/// <reference path="./com.crashlytics.android.answers.SessionEventMetadata.d.ts" />
/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequestFactory.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.AnalyticsSettingsData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class EnabledSessionAnalyticsManagerStrategy {
					public scheduleTimeBasedRollOverIfNeeded(): void;
					public cancelTimeBasedFileRollOver(): void;
					public rollFileOver(): boolean;
					public processEvent(param0: com.crashlytics.android.answers.SessionEvent.Builder): void;
					public constructor(param0: iofabricsdkandroidKit, param1: androidcontentContext, param2: javautilconcurrentScheduledExecutorService, param3: com.crashlytics.android.answers.SessionAnalyticsFilesManager, param4: iofabricsdkandroidservicesnetworkHttpRequestFactory, param5: com.crashlytics.android.answers.SessionEventMetadata);
					public setAnalyticsSettingsData(param0: iofabricsdkandroidservicessettingsAnalyticsSettingsData, param1: string): void;
					public sendEvents(): void;
					public deleteAllEvents(): void;
				}
			}
		}
	}
}

/// <reference path="./com.crashlytics.android.answers.SessionEvent.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class EventFilter {
					/**
					 * Constructs a new instance of the com.crashlytics.android.answers.EventFilter interface with the provided implementation.
					 */
					public constructor(implementation: {
						skipEvent(param0: com.crashlytics.android.answers.SessionEvent): boolean;
					});
					public skipEvent(param0: com.crashlytics.android.answers.SessionEvent): boolean;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class InviteEvent extends com.crashlytics.android.answers.PredefinedEvent {
					public putMethod(param0: string): com.crashlytics.android.answers.InviteEvent;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./com.crashlytics.android.answers.SessionEvent.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class KeepAllEventFilter {
					public skipEvent(param0: com.crashlytics.android.answers.SessionEvent): boolean;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class LevelEndEvent extends com.crashlytics.android.answers.PredefinedEvent {
					public putLevelName(param0: string): com.crashlytics.android.answers.LevelEndEvent;
					public constructor();
					public putScore(param0: javalangNumber): com.crashlytics.android.answers.LevelEndEvent;
					public putSuccess(param0: boolean): com.crashlytics.android.answers.LevelEndEvent;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class LevelStartEvent extends com.crashlytics.android.answers.PredefinedEvent {
					public putLevelName(param0: string): com.crashlytics.android.answers.LevelStartEvent;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class LoginEvent extends com.crashlytics.android.answers.PredefinedEvent {
					public putMethod(param0: string): com.crashlytics.android.answers.LoginEvent;
					public constructor();
					public putSuccess(param0: boolean): com.crashlytics.android.answers.LoginEvent;
				}
			}
		}
	}
}

declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export abstract class PredefinedEvent extends com.crashlytics.android.answers.AnswersEvent {
					public toString(): string;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.util.Currency.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class PurchaseEvent extends com.crashlytics.android.answers.PredefinedEvent {
					public putItemName(param0: string): com.crashlytics.android.answers.PurchaseEvent;
					public putCurrency(param0: javautilCurrency): com.crashlytics.android.answers.PurchaseEvent;
					public constructor();
					public putItemType(param0: string): com.crashlytics.android.answers.PurchaseEvent;
					public putItemId(param0: string): com.crashlytics.android.answers.PurchaseEvent;
					public putSuccess(param0: boolean): com.crashlytics.android.answers.PurchaseEvent;
					public putItemPrice(param0: javamathBigDecimal): com.crashlytics.android.answers.PurchaseEvent;
				}
			}
		}
	}
}

import iofabricsdkandroidservicesconcurrencyinternalBackoff = io.fabric.sdk.android.services.concurrency.internal.Backoff;
import javautilRandom = java.util.Random;
/// <reference path="./io.fabric.sdk.android.services.concurrency.internal.Backoff.d.ts" />
/// <reference path="./java.util.Random.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class RandomBackoff {
					public constructor(param0: iofabricsdkandroidservicesconcurrencyinternalBackoff, param1: number);
					public getDelayMillis(param0: number): number;
					public constructor(param0: iofabricsdkandroidservicesconcurrencyinternalBackoff, param1: number, param2: javautilRandom);
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class RatingEvent extends com.crashlytics.android.answers.PredefinedEvent {
					public putContentName(param0: string): com.crashlytics.android.answers.RatingEvent;
					public putRating(param0: number): com.crashlytics.android.answers.RatingEvent;
					public constructor();
					public putContentType(param0: string): com.crashlytics.android.answers.RatingEvent;
					public putContentId(param0: string): com.crashlytics.android.answers.RatingEvent;
				}
			}
		}
	}
}

import iofabricsdkandroidservicesconcurrencyinternalRetryState = io.fabric.sdk.android.services.concurrency.internal.RetryState;
/// <reference path="./io.fabric.sdk.android.services.concurrency.internal.RetryState.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class RetryManager {
					public reset(): void;
					public constructor(param0: iofabricsdkandroidservicesconcurrencyinternalRetryState);
					public canRetry(param0: number): boolean;
					public recordRetry(param0: number): void;
				}
			}
		}
	}
}

/// <reference path="./com.crashlytics.android.answers.SessionEvent.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class SamplingEventFilter {
					public constructor(param0: number);
					public skipEvent(param0: com.crashlytics.android.answers.SessionEvent): boolean;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class SearchEvent extends com.crashlytics.android.answers.PredefinedEvent {
					public constructor();
					public putQuery(param0: string): com.crashlytics.android.answers.SearchEvent;
				}
			}
		}
	}
}

declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class SessionAnalyticsFilesManager {
					public generateUniqueRollOverFileName(): string;
					public getMaxByteSizePerFile(): number;
					public getMaxFilesToKeep(): number;
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequestFactory.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class SessionAnalyticsFilesSender {
					public send(param0: javautilList): boolean;
					public constructor(param0: iofabricsdkandroidKit, param1: string, param2: string, param3: iofabricsdkandroidservicesnetworkHttpRequestFactory, param4: string);
				}
			}
		}
	}
}

import iofabricsdkandroidservicescommonIdManager = io.fabric.sdk.android.services.common.IdManager;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.crashlytics.android.answers.CustomEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.PredefinedEvent.d.ts" />
/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.IdManager.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.AnalyticsSettingsData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class SessionAnalyticsManager {
					public onCrash(param0: string, param1: string): void;
					public disable(): void;
					public onBackground(): void;
					public onInstall(param0: number): void;
					public onError(param0: string): void;
					public onCustom(param0: com.crashlytics.android.answers.CustomEvent): void;
					public static build(param0: iofabricsdkandroidKit, param1: androidcontentContext, param2: iofabricsdkandroidservicescommonIdManager, param3: string, param4: string, param5: number): com.crashlytics.android.answers.SessionAnalyticsManager;
					public onPredefined(param0: com.crashlytics.android.answers.PredefinedEvent): void;
					public setAnalyticsSettingsData(param0: iofabricsdkandroidservicessettingsAnalyticsSettingsData, param1: string): void;
					public onLifecycle(param0: androidappActivity, param1: com.crashlytics.android.answers.SessionEvent.Type): void;
					public enable(): void;
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.settings.AnalyticsSettingsData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class SessionAnalyticsManagerStrategy {
					/**
					 * Constructs a new instance of the com.crashlytics.android.answers.SessionAnalyticsManagerStrategy interface with the provided implementation.
					 */
					public constructor(implementation: {
						setAnalyticsSettingsData(param0: iofabricsdkandroidservicessettingsAnalyticsSettingsData, param1: string): void;
						processEvent(param0: com.crashlytics.android.answers.SessionEvent.Builder): void;
						sendEvents(): void;
						deleteAllEvents(): void;
					});
					public processEvent(param0: com.crashlytics.android.answers.SessionEvent.Builder): void;
					public setAnalyticsSettingsData(param0: iofabricsdkandroidservicessettingsAnalyticsSettingsData, param1: string): void;
					public sendEvents(): void;
					public deleteAllEvents(): void;
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./com.crashlytics.android.answers.CustomEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.PredefinedEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.SessionEvent.d.ts" />
/// <reference path="./com.crashlytics.android.answers.SessionEventMetadata.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class SessionEvent {
					public sessionEventMetadata: com.crashlytics.android.answers.SessionEventMetadata;
					public timestamp: number;
					public type: com.crashlytics.android.answers.SessionEvent.Type;
					public details: javautilMap;
					public customType: string;
					public customAttributes: javautilMap;
					public predefinedType: string;
					public predefinedAttributes: javautilMap;
					public toString(): string;
					public static customEventBuilder(param0: com.crashlytics.android.answers.CustomEvent): com.crashlytics.android.answers.SessionEvent.Builder;
					public static predefinedEventBuilder(param0: com.crashlytics.android.answers.PredefinedEvent): com.crashlytics.android.answers.SessionEvent.Builder;
					public static crashEventBuilder(param0: string): com.crashlytics.android.answers.SessionEvent.Builder;
					public static installEventBuilder(param0: number): com.crashlytics.android.answers.SessionEvent.Builder;
					public static lifecycleEventBuilder(param0: com.crashlytics.android.answers.SessionEvent.Type, param1: androidappActivity): com.crashlytics.android.answers.SessionEvent.Builder;
					public static crashEventBuilder(param0: string, param1: string): com.crashlytics.android.answers.SessionEvent.Builder;
				}
				export module SessionEvent {
					export class Builder {
						public predefinedType(param0: string): com.crashlytics.android.answers.SessionEvent.Builder;
						public build(param0: com.crashlytics.android.answers.SessionEventMetadata): com.crashlytics.android.answers.SessionEvent;
						public details(param0: javautilMap): com.crashlytics.android.answers.SessionEvent.Builder;
						public customType(param0: string): com.crashlytics.android.answers.SessionEvent.Builder;
						public customAttributes(param0: javautilMap): com.crashlytics.android.answers.SessionEvent.Builder;
						public predefinedAttributes(param0: javautilMap): com.crashlytics.android.answers.SessionEvent.Builder;
						public constructor(param0: com.crashlytics.android.answers.SessionEvent.Type);
					}
					export class Type {
						public static START: com.crashlytics.android.answers.SessionEvent.Type;
						public static RESUME: com.crashlytics.android.answers.SessionEvent.Type;
						public static PAUSE: com.crashlytics.android.answers.SessionEvent.Type;
						public static STOP: com.crashlytics.android.answers.SessionEvent.Type;
						public static CRASH: com.crashlytics.android.answers.SessionEvent.Type;
						public static INSTALL: com.crashlytics.android.answers.SessionEvent.Type;
						public static CUSTOM: com.crashlytics.android.answers.SessionEvent.Type;
						public static PREDEFINED: com.crashlytics.android.answers.SessionEvent.Type;
						public static valueOf(param0: string): com.crashlytics.android.answers.SessionEvent.Type;
						public static values(): native.Array<com.crashlytics.android.answers.SessionEvent.Type>;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class SessionEventMetadata {
					public appBundleId: string;
					public executionId: string;
					public installationId: string;
					public androidId: string;
					public advertisingId: string;
					public limitAdTrackingEnabled: javalangBoolean;
					public betaDeviceToken: string;
					public buildId: string;
					public osVersion: string;
					public deviceModel: string;
					public appVersionCode: string;
					public appVersionName: string;
					public toString(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: javalangBoolean, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string);
				}
			}
		}
	}
}

import orgjsonJSONObject = org.json.JSONObject;
/// <reference path="./com.crashlytics.android.answers.SessionEvent.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class SessionEventTransform {
					public toBytes(param0: com.crashlytics.android.answers.SessionEvent): native.Array<number>;
					public buildJsonForEvent(param0: com.crashlytics.android.answers.SessionEvent): orgjsonJSONObject;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.crashlytics.android.answers.SessionEventMetadata.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.IdManager.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class SessionMetadataCollector {
					public getMetadata(): com.crashlytics.android.answers.SessionEventMetadata;
					public constructor(param0: androidcontentContext, param1: iofabricsdkandroidservicescommonIdManager, param2: string, param3: string);
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class ShareEvent extends com.crashlytics.android.answers.PredefinedEvent {
					public putContentName(param0: string): com.crashlytics.android.answers.ShareEvent;
					public constructor();
					public putContentId(param0: string): com.crashlytics.android.answers.ShareEvent;
					public putMethod(param0: string): com.crashlytics.android.answers.ShareEvent;
					public putContentType(param0: string): com.crashlytics.android.answers.ShareEvent;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class SignUpEvent extends com.crashlytics.android.answers.PredefinedEvent {
					public putSuccess(param0: boolean): com.crashlytics.android.answers.SignUpEvent;
					public constructor();
					public putMethod(param0: string): com.crashlytics.android.answers.SignUpEvent;
				}
			}
		}
	}
}

/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.util.Currency.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module answers {
				export class StartCheckoutEvent extends com.crashlytics.android.answers.PredefinedEvent {
					public putTotalPrice(param0: javamathBigDecimal): com.crashlytics.android.answers.StartCheckoutEvent;
					public constructor();
					public putItemCount(param0: number): com.crashlytics.android.answers.StartCheckoutEvent;
					public putCurrency(param0: javautilCurrency): com.crashlytics.android.answers.StartCheckoutEvent;
				}
			}
		}
	}
}

