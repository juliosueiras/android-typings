/// <reference path="./_helpers.d.ts" />
declare module com {
	export module crashlytics {
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
				public static GROUP: string;
				public constructor();
			}
		}
	}
}

import javautilCollection = java.util.Collection;
import javalangVoid = java.lang.Void;
import javalangThrowable = java.lang.Throwable;
import javanetURL = java.net.URL;
/// <reference path="./com.crashlytics.android.Crashlytics.d.ts" />
/// <reference path="./com.crashlytics.android.answers.Answers.d.ts" />
/// <reference path="./com.crashlytics.android.beta.Beta.d.ts" />
/// <reference path="./com.crashlytics.android.core.CrashlyticsCore.d.ts" />
/// <reference path="./com.crashlytics.android.core.CrashlyticsListener.d.ts" />
/// <reference path="./com.crashlytics.android.core.PinningInfoProvider.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export class Crashlytics {
				public static TAG: string;
				public answers: com.crashlytics.android.answers.Answers;
				public beta: com.crashlytics.android.beta.Beta;
				public core: com.crashlytics.android.core.CrashlyticsCore;
				public kits: javautilCollection;
				public static getPinningInfoProvider(): com.crashlytics.android.core.PinningInfoProvider;
				public static setUserIdentifier(param0: string): void;
				public static setPinningInfoProvider(param0: com.crashlytics.android.core.PinningInfoProvider): void;
				public static setFloat(param0: string, param1: number): void;
				public constructor();
				public getDebugMode(): boolean;
				public static setInt(param0: string, param1: number): void;
				public static log(param0: string): void;
				public static setUserEmail(param0: string): void;
				public setListener(param0: com.crashlytics.android.core.CrashlyticsListener): void;
				public setDebugMode(param0: boolean): void;
				public crash(): void;
				public static setUserName(param0: string): void;
				public static setDouble(param0: string, param1: number): void;
				public static setBool(param0: string, param1: boolean): void;
				public static getInstance(): com.crashlytics.android.Crashlytics;
				public verifyPinning(param0: javanetURL): boolean;
				public getVersion(): string;
				public static logException(param0: javalangThrowable): void;
				public static setString(param0: string, param1: string): void;
				public doInBackground(): javalangVoid;
				public getIdentifier(): string;
				public getKits(): javautilCollection;
				public static setLong(param0: string, param1: number): void;
				public static log(param0: number, param1: string, param2: string): void;
			}
			export module Crashlytics {
				export class Builder {
					public constructor();
					public answers(param0: com.crashlytics.android.answers.Answers): com.crashlytics.android.Crashlytics.Builder;
					public build(): com.crashlytics.android.Crashlytics;
					public delay(param0: number): com.crashlytics.android.Crashlytics.Builder;
					public beta(param0: com.crashlytics.android.beta.Beta): com.crashlytics.android.Crashlytics.Builder;
					public listener(param0: com.crashlytics.android.core.CrashlyticsListener): com.crashlytics.android.Crashlytics.Builder;
					public core(param0: com.crashlytics.android.core.CrashlyticsCore): com.crashlytics.android.Crashlytics.Builder;
					public disabled(param0: boolean): com.crashlytics.android.Crashlytics.Builder;
					public pinningInfo(param0: com.crashlytics.android.core.PinningInfoProvider): com.crashlytics.android.Crashlytics.Builder;
				}
			}
		}
	}
}

