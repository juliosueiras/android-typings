/// <reference path="./_helpers.d.ts" />
import androidcontentContext = android.content.Context;
import iofabricsdkandroidservicescommonIdManager = io.fabric.sdk.android.services.common.IdManager;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.common.IdManager.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class AppData {
					public apiKey: string;
					public buildId: string;
					public installerPackageName: string;
					public packageName: string;
					public versionCode: string;
					public versionName: string;
					public static create(param0: androidcontentContext, param1: iofabricsdkandroidservicescommonIdManager, param2: string, param3: string): com.crashlytics.android.core.AppData;
				}
			}
		}
	}
}

declare module com {
	export module crashlytics {
		export module android {
			export module core {
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

import javanioByteBuffer = java.nio.ByteBuffer;
import javautilList = java.util.List;
import javalangObject = java.lang.Object;
import javaioInputStream = java.io.InputStream;
/// <reference path="./com.crashlytics.android.core.ByteString.d.ts" />
/// <reference path="./com.crashlytics.android.core.CodedOutputStream.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class ByteString {
					public static EMPTY: com.crashlytics.android.core.ByteString;
					public isEmpty(): boolean;
					public equals(param0: javalangObject): boolean;
					public byteAt(param0: number): number;
					public size(): number;
					public copyTo(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
					public static copyFrom(param0: native.Array<number>): com.crashlytics.android.core.ByteString;
					public static copyFrom(param0: javautilList): com.crashlytics.android.core.ByteString;
					public toStringUtf8(): string;
					public static copyFrom(param0: javanioByteBuffer): com.crashlytics.android.core.ByteString;
					public toByteArray(): native.Array<number>;
					public static copyFrom(param0: native.Array<number>, param1: number, param2: number): com.crashlytics.android.core.ByteString;
					public static newOutput(): com.crashlytics.android.core.ByteString.Output;
					public copyTo(param0: native.Array<number>, param1: number): void;
					public static copyFrom(param0: javanioByteBuffer, param1: number): com.crashlytics.android.core.ByteString;
					public static copyFrom(param0: string, param1: string): com.crashlytics.android.core.ByteString;
					public copyTo(param0: javanioByteBuffer): void;
					public toString(param0: string): string;
					public asReadOnlyByteBuffer(): javanioByteBuffer;
					public newInput(): javaioInputStream;
					public static newOutput(param0: number): com.crashlytics.android.core.ByteString.Output;
					public static copyFromUtf8(param0: string): com.crashlytics.android.core.ByteString;
					public hashCode(): number;
				}
				export module ByteString {
					export class CodedBuilder {
						public build(): com.crashlytics.android.core.ByteString;
						public getCodedOutput(): com.crashlytics.android.core.CodedOutputStream;
					}
					export class Output {
						public toByteString(): com.crashlytics.android.core.ByteString;
					}
				}
			}
		}
	}
}

/// <reference path="./io.fabric.sdk.android.services.common.IdManager.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class CLSUUID {
					public constructor(param0: iofabricsdkandroidservicescommonIdManager);
					public toString(): string;
				}
			}
		}
	}
}

import javaioFile = java.io.File;
import javaioFilenameFilter = java.io.FilenameFilter;
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FilenameFilter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class ClsFileOutputStream {
					public static SESSION_FILE_EXTENSION: string;
					public static IN_PROGRESS_SESSION_FILE_EXTENSION: string;
					public static TEMP_FILENAME_FILTER: javaioFilenameFilter;
					public constructor(param0: string, param1: string);
					public getInProgressFile(): javaioFile;
					public close(): void;
					public constructor(param0: javaioFile, param1: string);
					public getCompleteFile(): javaioFile;
					public closeInProgressStream(): void;
				}
			}
		}
	}
}

import javaioOutputStream = java.io.OutputStream;
/// <reference path="./com.crashlytics.android.core.ByteString.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class CodedOutputStream {
					public static DEFAULT_BUFFER_SIZE: number;
					public static LITTLE_ENDIAN_32_SIZE: number;
					public static LITTLE_ENDIAN_64_SIZE: number;
					public writeSFixed64(param0: number, param1: number): void;
					public static computeFixed32Size(param0: number, param1: number): number;
					public writeFixed32NoTag(param0: number): void;
					public writeSInt32NoTag(param0: number): void;
					public writeUInt32NoTag(param0: number): void;
					public writeRawBytes(param0: native.Array<number>): void;
					public static computeUInt64Size(param0: number, param1: number): number;
					public static computeSFixed32Size(param0: number, param1: number): number;
					public writeStringNoTag(param0: string): void;
					public writeRawBytes(param0: com.crashlytics.android.core.ByteString): void;
					public writeRawVarint64(param0: number): void;
					public writeBool(param0: number, param1: boolean): void;
					public writeBytes(param0: number, param1: com.crashlytics.android.core.ByteString): void;
					public writeSInt32(param0: number, param1: number): void;
					public static computeRawVarint32Size(param0: number): number;
					public static computeSFixed64SizeNoTag(param0: number): number;
					public static computeInt32Size(param0: number, param1: number): number;
					public static computeBytesSizeNoTag(param0: com.crashlytics.android.core.ByteString): number;
					public static computeTagSize(param0: number): number;
					public static computeFixed32SizeNoTag(param0: number): number;
					public writeString(param0: number, param1: string): void;
					public writeRawBytes(param0: native.Array<number>, param1: number, param2: number): void;
					public static computeSInt64Size(param0: number, param1: number): number;
					public static computeDoubleSizeNoTag(param0: number): number;
					public checkNoSpaceLeft(): void;
					public writeInt64NoTag(param0: number): void;
					public writeRawMessageSetExtension(param0: number, param1: com.crashlytics.android.core.ByteString): void;
					public writeUInt64(param0: number, param1: number): void;
					public writeSFixed64NoTag(param0: number): void;
					public static computeDoubleSize(param0: number, param1: number): number;
					public writeInt32(param0: number, param1: number): void;
					public static computeInt32SizeNoTag(param0: number): number;
					public writeInt32NoTag(param0: number): void;
					public static computeUInt32SizeNoTag(param0: number): number;
					public flush(): void;
					public writeFixed64(param0: number, param1: number): void;
					public writeSFixed32NoTag(param0: number): void;
					public static computeStringSizeNoTag(param0: string): number;
					public static computeSInt32SizeNoTag(param0: number): number;
					public writeBytesNoTag(param0: com.crashlytics.android.core.ByteString): void;
					public static computeInt64Size(param0: number, param1: number): number;
					public static computeEnumSizeNoTag(param0: number): number;
					public writeFloatNoTag(param0: number): void;
					public writeDoubleNoTag(param0: number): void;
					public static computeFloatSizeNoTag(param0: number): number;
					public writeFixed32(param0: number, param1: number): void;
					public static computeRawMessageSetExtensionSize(param0: number, param1: com.crashlytics.android.core.ByteString): number;
					public static computeEnumSize(param0: number, param1: number): number;
					public static encodeZigZag32(param0: number): number;
					public writeFixed64NoTag(param0: number): void;
					public writeDouble(param0: number, param1: number): void;
					public writeEnum(param0: number, param1: number): void;
					public static newInstance(param0: native.Array<number>, param1: number, param2: number): com.crashlytics.android.core.CodedOutputStream;
					public writeSInt64NoTag(param0: number): void;
					public static computeInt64SizeNoTag(param0: number): number;
					public writeInt64(param0: number, param1: number): void;
					public static newInstance(param0: native.Array<number>): com.crashlytics.android.core.CodedOutputStream;
					public writeBoolNoTag(param0: boolean): void;
					public static newInstance(param0: javaioOutputStream, param1: number): com.crashlytics.android.core.CodedOutputStream;
					public writeUInt64NoTag(param0: number): void;
					public writeRawLittleEndian64(param0: number): void;
					public writeUInt32(param0: number, param1: number): void;
					public static computeUInt32Size(param0: number, param1: number): number;
					public writeTag(param0: number, param1: number): void;
					public static computeUInt64SizeNoTag(param0: number): number;
					public spaceLeft(): number;
					public static computeSInt64SizeNoTag(param0: number): number;
					public static computeFixed64Size(param0: number, param1: number): number;
					public static computeBoolSize(param0: number, param1: boolean): number;
					public static newInstance(param0: javaioOutputStream): com.crashlytics.android.core.CodedOutputStream;
					public static encodeZigZag64(param0: number): number;
					public writeSFixed32(param0: number, param1: number): void;
					public writeRawVarint32(param0: number): void;
					public writeRawLittleEndian32(param0: number): void;
					public static computeFloatSize(param0: number, param1: number): number;
					public static computeSFixed64Size(param0: number, param1: number): number;
					public static computeFixed64SizeNoTag(param0: number): number;
					public static computeRawVarint64Size(param0: number): number;
					public static computeSFixed32SizeNoTag(param0: number): number;
					public writeRawBytes(param0: com.crashlytics.android.core.ByteString, param1: number, param2: number): void;
					public writeEnumNoTag(param0: number): void;
					public static computeStringSize(param0: number, param1: string): number;
					public writeRawByte(param0: number): void;
					public static computeBoolSizeNoTag(param0: boolean): number;
					public static computeBytesSize(param0: number, param1: com.crashlytics.android.core.ByteString): number;
					public writeFloat(param0: number, param1: number): void;
					public writeSInt64(param0: number, param1: number): void;
					public static computeSInt32Size(param0: number, param1: number): number;
				}
				export module CodedOutputStream {
					export class OutOfSpaceException {
					}
				}
			}
		}
	}
}

import androidappActivity = android.app.Activity;
import iofabricsdkandroidservicessettingsPromptSettingsData = io.fabric.sdk.android.services.settings.PromptSettingsData;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.PromptSettingsData.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class CrashPromptDialog {
					public show(): void;
					public static create(param0: androidappActivity, param1: iofabricsdkandroidservicessettingsPromptSettingsData, param2: com.crashlytics.android.core.CrashPromptDialog.AlwaysSendCallback): com.crashlytics.android.core.CrashPromptDialog;
					public await(): void;
					public getOptIn(): boolean;
				}
				export module CrashPromptDialog {
					export class AlwaysSendCallback {
						/**
						 * Constructs a new instance of the com.crashlytics.android.core.CrashPromptDialog$AlwaysSendCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							sendUserReportsWithoutPrompting(param0: boolean): void;
						});
						public sendUserReportsWithoutPrompting(param0: boolean): void;
					}
					export class OptInLatch {
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class CrashTest {
					public crashAsyncTask(param0: number): void;
					public constructor();
					public throwRuntimeException(param0: string): void;
					public indexOutOfBounds(): void;
					public throwFiveChainedExceptions(): void;
					public stackOverflow(): number;
				}
			}
		}
	}
}

import javautilconcurrentExecutorService = java.util.concurrent.ExecutorService;
/// <reference path="./java.util.concurrent.ExecutorService.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class CrashlyticsBackgroundWorker {
					public constructor(param0: javautilconcurrentExecutorService);
				}
			}
		}
	}
}

import iofabricsdkandroidKit = io.fabric.sdk.android.Kit;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.crashlytics.android.core.PreferenceManager.d.ts" />
/// <reference path="./com.crashlytics.android.core.Report.d.ts" />
/// <reference path="./com.crashlytics.android.core.ReportUploader.d.ts" />
/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.PromptSettingsData.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class CrashlyticsController {
				}
				export module CrashlyticsController {
					export class AnySessionPartFileFilter {
						public accept(param0: javaioFile, param1: string): boolean;
					}
					export class FileNameContainsFilter {
						public accept(param0: javaioFile, param1: string): boolean;
						public constructor(param0: string);
					}
					export class InvalidPartFileFilter {
						public accept(param0: javaioFile, param1: string): boolean;
					}
					export class PrivacyDialogCheck {
						public constructor(param0: iofabricsdkandroidKit, param1: com.crashlytics.android.core.PreferenceManager, param2: iofabricsdkandroidservicessettingsPromptSettingsData);
						public canSendReports(): boolean;
					}
					export class SendReportRunnable {
						public constructor(param0: androidcontentContext, param1: com.crashlytics.android.core.Report, param2: com.crashlytics.android.core.ReportUploader);
						public run(): void;
					}
					export class SessionPartFileFilter {
						public accept(param0: javaioFile, param1: string): boolean;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

import javalangVoid = java.lang.Void;
import javalangThrowable = java.lang.Throwable;
import javanetURL = java.net.URL;
import javalangBoolean = java.lang.Boolean;
/// <reference path="./com.crashlytics.android.core.CrashlyticsCore.d.ts" />
/// <reference path="./com.crashlytics.android.core.CrashlyticsFileMarker.d.ts" />
/// <reference path="./com.crashlytics.android.core.CrashlyticsListener.d.ts" />
/// <reference path="./com.crashlytics.android.core.PinningInfoProvider.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class CrashlyticsCore {
					public static TAG: string;
					public getVersion(): string;
					public setDouble(param0: string, param1: number): void;
					public setUserEmail(param0: string): void;
					public setListener(param0: com.crashlytics.android.core.CrashlyticsListener): void;
					public static getInstance(): com.crashlytics.android.core.CrashlyticsCore;
					public getPinningInfoProvider(): com.crashlytics.android.core.PinningInfoProvider;
					public onPreExecute(): boolean;
					public setBool(param0: string, param1: boolean): void;
					public setLong(param0: string, param1: number): void;
					public getIdentifier(): string;
					public verifyPinning(param0: javanetURL): boolean;
					public setUserName(param0: string): void;
					public setString(param0: string, param1: string): void;
					public log(param0: string): void;
					public logException(param0: javalangThrowable): void;
					public constructor();
					public setUserIdentifier(param0: string): void;
					public setFloat(param0: string, param1: number): void;
					public doInBackground(): javalangVoid;
					public setInt(param0: string, param1: number): void;
					public log(param0: number, param1: string, param2: string): void;
					public crash(): void;
				}
				export module CrashlyticsCore {
					export class Builder {
						public pinningInfo(param0: com.crashlytics.android.core.PinningInfoProvider): com.crashlytics.android.core.CrashlyticsCore.Builder;
						public disabled(param0: boolean): com.crashlytics.android.core.CrashlyticsCore.Builder;
						public constructor();
						public listener(param0: com.crashlytics.android.core.CrashlyticsListener): com.crashlytics.android.core.CrashlyticsCore.Builder;
						public delay(param0: number): com.crashlytics.android.core.CrashlyticsCore.Builder;
						public build(): com.crashlytics.android.core.CrashlyticsCore;
					}
					export class CrashMarkerCheck {
						public constructor(param0: com.crashlytics.android.core.CrashlyticsFileMarker);
						public call(): javalangBoolean;
					}
					export class NoOpListener {
						public crashlyticsDidDetectCrashDuringPreviousExecution(): void;
					}
				}
			}
		}
	}
}

import iofabricsdkandroidservicespersistenceFileStore = io.fabric.sdk.android.services.persistence.FileStore;
/// <reference path="./io.fabric.sdk.android.services.persistence.FileStore.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class CrashlyticsFileMarker {
					public constructor(param0: string, param1: iofabricsdkandroidservicespersistenceFileStore);
					public create(): boolean;
					public isPresent(): boolean;
					public remove(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class CrashlyticsListener {
					/**
					 * Constructs a new instance of the com.crashlytics.android.core.CrashlyticsListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						crashlyticsDidDetectCrashDuringPreviousExecution(): void;
					});
					public crashlyticsDidDetectCrashDuringPreviousExecution(): void;
				}
			}
		}
	}
}

/// <reference path="./com.crashlytics.android.core.PinningInfoProvider.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class CrashlyticsPinningInfoProvider {
					public getKeyStorePassword(): string;
					public getKeyStoreStream(): javaioInputStream;
					public getPinCreationTimeInMillis(): number;
					public constructor(param0: com.crashlytics.android.core.PinningInfoProvider);
					public getPins(): native.Array<string>;
				}
			}
		}
	}
}

import javalangThreadUncaughtExceptionHandler = java.lang.Thread.UncaughtExceptionHandler;
import javalangThread = java.lang.Thread;
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class CrashlyticsUncaughtExceptionHandler {
					public constructor(param0: com.crashlytics.android.core.CrashlyticsUncaughtExceptionHandler.CrashListener, param1: javalangThreadUncaughtExceptionHandler);
					public uncaughtException(param0: javalangThread, param1: javalangThrowable): void;
				}
				export module CrashlyticsUncaughtExceptionHandler {
					export class CrashListener {
						/**
						 * Constructs a new instance of the com.crashlytics.android.core.CrashlyticsUncaughtExceptionHandler$CrashListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onUncaughtException(param0: javalangThread, param1: javalangThrowable): void;
						});
						public onUncaughtException(param0: javalangThread, param1: javalangThrowable): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.crashlytics.android.core.Report.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class CreateReportRequest {
					public apiKey: string;
					public report: com.crashlytics.android.core.Report;
					public constructor(param0: string, param1: com.crashlytics.android.core.Report);
				}
			}
		}
	}
}

/// <reference path="./com.crashlytics.android.core.CreateReportRequest.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class CreateReportSpiCall {
					/**
					 * Constructs a new instance of the com.crashlytics.android.core.CreateReportSpiCall interface with the provided implementation.
					 */
					public constructor(implementation: {
						invoke(param0: com.crashlytics.android.core.CreateReportRequest): boolean;
					});
					public invoke(param0: com.crashlytics.android.core.CreateReportRequest): boolean;
				}
			}
		}
	}
}

import iofabricsdkandroidservicesnetworkHttpRequestFactory = io.fabric.sdk.android.services.network.HttpRequestFactory;
/// <reference path="./com.crashlytics.android.core.CreateReportRequest.d.ts" />
/// <reference path="./io.fabric.sdk.android.Kit.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.network.HttpRequestFactory.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class DefaultCreateReportSpiCall {
					public constructor(param0: iofabricsdkandroidKit, param1: string, param2: string, param3: iofabricsdkandroidservicesnetworkHttpRequestFactory);
					public invoke(param0: com.crashlytics.android.core.CreateReportRequest): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class DevicePowerStateListener {
					public isPowerConnected(): boolean;
					public dispose(): void;
					public constructor(param0: androidcontentContext);
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.settings.PromptSettingsData.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class DialogStringResolver {
					public getTitle(): string;
					public getAlwaysSendButtonTitle(): string;
					public getCancelButtonTitle(): string;
					public getMessage(): string;
					public getSendButtonTitle(): string;
					public constructor(param0: androidcontentContext, param1: iofabricsdkandroidservicessettingsPromptSettingsData);
				}
			}
		}
	}
}

/// <reference path="./com.crashlytics.android.core.ByteString.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class FileLogStore {
					/**
					 * Constructs a new instance of the com.crashlytics.android.core.FileLogStore interface with the provided implementation.
					 */
					public constructor(implementation: {
						writeToLog(param0: number, param1: string): void;
						getLogAsByteString(): com.crashlytics.android.core.ByteString;
						closeLogFile(): void;
						deleteLogFile(): void;
					});
					public getLogAsByteString(): com.crashlytics.android.core.ByteString;
					public closeLogFile(): void;
					public writeToLog(param0: number, param1: string): void;
					public deleteLogFile(): void;
				}
			}
		}
	}
}

import javautilMap = java.util.Map;
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class InvalidSessionReport {
					public getCustomHeaders(): javautilMap;
					public getFileName(): string;
					public getFile(): javaioFile;
					public getIdentifier(): string;
					public getFiles(): native.Array<javaioFile>;
					public constructor(param0: string, param1: native.Array<javaioFile>);
					public remove(): void;
				}
			}
		}
	}
}

import javautilSet = java.util.Set;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.crashlytics.android.core.ByteString.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.persistence.FileStore.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class LogFileManager {
					public constructor(param0: androidcontentContext, param1: iofabricsdkandroidservicespersistenceFileStore);
					public discardOldLogFiles(param0: javautilSet): void;
					public setCurrentSession(param0: string): void;
					public getByteStringForLog(): com.crashlytics.android.core.ByteString;
					public writeToLog(param0: number, param1: string): void;
					public constructor(param0: androidcontentContext, param1: iofabricsdkandroidservicespersistenceFileStore, param2: string);
					public clearLog(): void;
				}
				export module LogFileManager {
					export class NoopLogStore {
						public writeToLog(param0: number, param1: string): void;
						public closeLogFile(): void;
						public deleteLogFile(): void;
						public getLogAsByteString(): com.crashlytics.android.core.ByteString;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class ManifestUnityVersionProvider {
					public constructor(param0: androidcontentContext, param1: string);
					public getUnityVersion(): string;
				}
			}
		}
	}
}

/// <reference path="./com.crashlytics.android.core.UserMetaData.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class MetaDataStore {
					public readKeyData(param0: string): javautilMap;
					public constructor(param0: javaioFile);
					public writeUserData(param0: string, param1: com.crashlytics.android.core.UserMetaData): void;
					public writeKeyData(param0: string, param1: javautilMap): void;
					public readUserData(param0: string): com.crashlytics.android.core.UserMetaData;
				}
			}
		}
	}
}

import javalangStackTraceElement = java.lang.StackTraceElement;
/// <reference path="./com.crashlytics.android.core.StackTraceTrimmingStrategy.d.ts" />
/// <reference path="./java.lang.StackTraceElement.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class MiddleOutFallbackStrategy {
					public getTrimmedStackTrace(param0: native.Array<javalangStackTraceElement>): native.Array<javalangStackTraceElement>;
					public constructor(param0: number, param1: native.Array<com.crashlytics.android.core.StackTraceTrimmingStrategy>);
				}
			}
		}
	}
}

/// <reference path="./java.lang.StackTraceElement.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class MiddleOutStrategy {
					public getTrimmedStackTrace(param0: native.Array<javalangStackTraceElement>): native.Array<javalangStackTraceElement>;
					public constructor(param0: number);
				}
			}
		}
	}
}

/// <reference path="./com.crashlytics.android.core.ByteString.d.ts" />
/// <reference path="./com.crashlytics.android.core.CodedOutputStream.d.ts" />
/// <reference path="./com.crashlytics.android.core.LogFileManager.d.ts" />
/// <reference path="./com.crashlytics.android.core.internal.models.BinaryImageData.d.ts" />
/// <reference path="./com.crashlytics.android.core.internal.models.CustomAttributeData.d.ts" />
/// <reference path="./com.crashlytics.android.core.internal.models.SessionEventData.d.ts" />
/// <reference path="./com.crashlytics.android.core.internal.models.SignalData.d.ts" />
/// <reference path="./com.crashlytics.android.core.internal.models.ThreadData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class NativeCrashWriter {
					public static writeNativeCrash(param0: com.crashlytics.android.core.internal.models.SessionEventData, param1: com.crashlytics.android.core.LogFileManager, param2: javautilMap, param3: com.crashlytics.android.core.CodedOutputStream): void;
				}
				export module NativeCrashWriter {
					export class ApplicationMessage extends com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage {
						public constructor(param0: com.crashlytics.android.core.NativeCrashWriter.ExecutionMessage, param1: com.crashlytics.android.core.NativeCrashWriter.RepeatedMessage);
						public constructor(param0: number, param1: native.Array<com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage>);
					}
					export class BinaryImageMessage extends com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage {
						public getPropertiesSize(): number;
						public writeProperties(param0: com.crashlytics.android.core.CodedOutputStream): void;
						public constructor(param0: number, param1: native.Array<com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage>);
						public constructor(param0: com.crashlytics.android.core.internal.models.BinaryImageData);
					}
					export class CustomAttributeMessage extends com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage {
						public constructor(param0: com.crashlytics.android.core.internal.models.CustomAttributeData);
						public getPropertiesSize(): number;
						public writeProperties(param0: com.crashlytics.android.core.CodedOutputStream): void;
						public constructor(param0: number, param1: native.Array<com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage>);
					}
					export class DeviceMessage extends com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage {
						public getPropertiesSize(): number;
						public writeProperties(param0: com.crashlytics.android.core.CodedOutputStream): void;
						public constructor(param0: number, param1: native.Array<com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage>);
						public constructor(param0: number, param1: number, param2: boolean, param3: number, param4: number, param5: number);
					}
					export class EventMessage extends com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage {
						public getPropertiesSize(): number;
						public writeProperties(param0: com.crashlytics.android.core.CodedOutputStream): void;
						public constructor(param0: number, param1: native.Array<com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage>);
						public constructor(param0: number, param1: string, param2: native.Array<com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage>);
					}
					export class ExecutionMessage extends com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage {
						public constructor(param0: com.crashlytics.android.core.NativeCrashWriter.SignalMessage, param1: com.crashlytics.android.core.NativeCrashWriter.RepeatedMessage, param2: com.crashlytics.android.core.NativeCrashWriter.RepeatedMessage);
						public constructor(param0: number, param1: native.Array<com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage>);
					}
					export class FrameMessage extends com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage {
						public constructor(param0: com.crashlytics.android.core.internal.models.ThreadData.FrameData);
						public getPropertiesSize(): number;
						public writeProperties(param0: com.crashlytics.android.core.CodedOutputStream): void;
						public constructor(param0: number, param1: native.Array<com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage>);
					}
					export class LogMessage extends com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage {
						public getPropertiesSize(): number;
						public constructor(param0: com.crashlytics.android.core.ByteString);
						public writeProperties(param0: com.crashlytics.android.core.CodedOutputStream): void;
						public constructor(param0: number, param1: native.Array<com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage>);
					}
					export class NullMessage extends com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage {
						public constructor();
						public write(param0: com.crashlytics.android.core.CodedOutputStream): void;
						public getSize(): number;
						public constructor(param0: number, param1: native.Array<com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage>);
					}
					export abstract class ProtobufMessage {
						public getSizeNoTag(): number;
						public write(param0: com.crashlytics.android.core.CodedOutputStream): void;
						public getPropertiesSize(): number;
						public getSize(): number;
						public writeProperties(param0: com.crashlytics.android.core.CodedOutputStream): void;
						public constructor(param0: number, param1: native.Array<com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage>);
					}
					export class RepeatedMessage extends com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage {
						public constructor(param0: native.Array<com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage>);
						public write(param0: com.crashlytics.android.core.CodedOutputStream): void;
						public getSize(): number;
						public constructor(param0: number, param1: native.Array<com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage>);
					}
					export class SignalMessage extends com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage {
						public constructor(param0: com.crashlytics.android.core.internal.models.SignalData);
						public getPropertiesSize(): number;
						public writeProperties(param0: com.crashlytics.android.core.CodedOutputStream): void;
						public constructor(param0: number, param1: native.Array<com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage>);
					}
					export class ThreadMessage extends com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage {
						public getPropertiesSize(): number;
						public writeProperties(param0: com.crashlytics.android.core.CodedOutputStream): void;
						public constructor(param0: number, param1: native.Array<com.crashlytics.android.core.NativeCrashWriter.ProtobufMessage>);
						public constructor(param0: com.crashlytics.android.core.internal.models.ThreadData, param1: com.crashlytics.android.core.NativeCrashWriter.RepeatedMessage);
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class PinningInfoProvider {
					/**
					 * Constructs a new instance of the com.crashlytics.android.core.PinningInfoProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						getKeyStoreStream(): javaioInputStream;
						getKeyStorePassword(): string;
						getPins(): native.Array<string>;
					});
					public getKeyStorePassword(): string;
					public getKeyStoreStream(): javaioInputStream;
					public getPins(): native.Array<string>;
				}
			}
		}
	}
}

import iofabricsdkandroidservicespersistencePreferenceStore = io.fabric.sdk.android.services.persistence.PreferenceStore;
/// <reference path="./com.crashlytics.android.core.CrashlyticsCore.d.ts" />
/// <reference path="./io.fabric.sdk.android.services.persistence.PreferenceStore.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class PreferenceManager {
					public static create(param0: iofabricsdkandroidservicespersistencePreferenceStore, param1: com.crashlytics.android.core.CrashlyticsCore): com.crashlytics.android.core.PreferenceManager;
					public constructor(param0: iofabricsdkandroidservicespersistencePreferenceStore);
				}
			}
		}
	}
}

/// <reference path="./com.crashlytics.android.core.ByteString.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class QueueFileLogStore {
					public constructor(param0: javaioFile, param1: number);
					public getLogAsByteString(): com.crashlytics.android.core.ByteString;
					public closeLogFile(): void;
					public writeToLog(param0: number, param1: string): void;
					public deleteLogFile(): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.StackTraceElement.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class RemoveRepeatsStrategy {
					public getTrimmedStackTrace(param0: native.Array<javalangStackTraceElement>): native.Array<javalangStackTraceElement>;
					public constructor();
					public constructor(param0: number);
				}
			}
		}
	}
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class Report {
					/**
					 * Constructs a new instance of the com.crashlytics.android.core.Report interface with the provided implementation.
					 */
					public constructor(implementation: {
						remove(): void;
						getFileName(): string;
						getIdentifier(): string;
						getFile(): javaioFile;
						getFiles(): native.Array<javaioFile>;
						getCustomHeaders(): javautilMap;
					});
					public getCustomHeaders(): javautilMap;
					public getFileName(): string;
					public getFile(): javaioFile;
					public getIdentifier(): string;
					public getFiles(): native.Array<javaioFile>;
					public remove(): void;
				}
			}
		}
	}
}

/// <reference path="./com.crashlytics.android.core.CreateReportSpiCall.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class ReportUploader {
					public uploadReports(param0: number, param1: com.crashlytics.android.core.ReportUploader.SendCheck): void;
					public constructor(param0: string, param1: com.crashlytics.android.core.CreateReportSpiCall);
				}
				export module ReportUploader {
					export class AlwaysSendCheck {
						public canSendReports(): boolean;
					}
					export class SendCheck {
						/**
						 * Constructs a new instance of the com.crashlytics.android.core.ReportUploader$SendCheck interface with the provided implementation.
						 */
						public constructor(implementation: {
							canSendReports(): boolean;
						});
						public canSendReports(): boolean;
					}
					export class Worker {
						public onRun(): void;
					}
				}
			}
		}
	}
}

import androidappActivityManagerRunningAppProcessInfo = android.app.ActivityManager.RunningAppProcessInfo;
import javalangFloat = java.lang.Float;
/// <reference path="./com.crashlytics.android.core.CodedOutputStream.d.ts" />
/// <reference path="./com.crashlytics.android.core.LogFileManager.d.ts" />
/// <reference path="./com.crashlytics.android.core.TrimmedThrowableData.d.ts" />
/// <reference path="./java.lang.Float.d.ts" />
/// <reference path="./java.lang.StackTraceElement.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class SessionProtobufHelper {
					public static writeSessionEvent(param0: com.crashlytics.android.core.CodedOutputStream, param1: number, param2: string, param3: com.crashlytics.android.core.TrimmedThrowableData, param4: javalangThread, param5: native.Array<javalangStackTraceElement>, param6: native.Array<javalangThread>, param7: javautilList, param8: javautilMap, param9: com.crashlytics.android.core.LogFileManager, param10: androidappActivityManagerRunningAppProcessInfo, param11: number, param12: string, param13: string, param14: javalangFloat, param15: number, param16: boolean, param17: number, param18: number): void;
					public static writeSessionDevice(param0: com.crashlytics.android.core.CodedOutputStream, param1: string, param2: number, param3: string, param4: number, param5: number, param6: number, param7: boolean, param8: javautilMap, param9: number, param10: string, param11: string): void;
					public static writeBeginSession(param0: com.crashlytics.android.core.CodedOutputStream, param1: string, param2: string, param3: number): void;
					public static writeSessionUser(param0: com.crashlytics.android.core.CodedOutputStream, param1: string, param2: string, param3: string): void;
					public static writeSessionApp(param0: com.crashlytics.android.core.CodedOutputStream, param1: string, param2: string, param3: string, param4: string, param5: string, param6: number, param7: string): void;
					public static writeSessionOS(param0: com.crashlytics.android.core.CodedOutputStream, param1: boolean): void;
				}
			}
		}
	}
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class SessionReport {
					public getCustomHeaders(): javautilMap;
					public getFileName(): string;
					public constructor(param0: javaioFile, param1: javautilMap);
					public getFile(): javaioFile;
					public constructor(param0: javaioFile);
					public getIdentifier(): string;
					public getFiles(): native.Array<javaioFile>;
					public remove(): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.StackTraceElement.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class StackTraceTrimmingStrategy {
					/**
					 * Constructs a new instance of the com.crashlytics.android.core.StackTraceTrimmingStrategy interface with the provided implementation.
					 */
					public constructor(implementation: {
						getTrimmedStackTrace(param0: native.Array<javalangStackTraceElement>): native.Array<javalangStackTraceElement>;
					});
					public getTrimmedStackTrace(param0: native.Array<javalangStackTraceElement>): native.Array<javalangStackTraceElement>;
				}
			}
		}
	}
}

/// <reference path="./com.crashlytics.android.core.StackTraceTrimmingStrategy.d.ts" />
/// <reference path="./java.lang.StackTraceElement.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class TrimmedThrowableData {
					public localizedMessage: string;
					public className: string;
					public stacktrace: native.Array<javalangStackTraceElement>;
					public cause: com.crashlytics.android.core.TrimmedThrowableData;
					public constructor(param0: javalangThrowable, param1: com.crashlytics.android.core.StackTraceTrimmingStrategy);
				}
			}
		}
	}
}

declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class UnityVersionProvider {
					/**
					 * Constructs a new instance of the com.crashlytics.android.core.UnityVersionProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						getUnityVersion(): string;
					});
					public getUnityVersion(): string;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class UserMetaData {
					public static EMPTY: com.crashlytics.android.core.UserMetaData;
					public id: string;
					public name: string;
					public email: string;
					public isEmpty(): boolean;
					public constructor();
					public constructor(param0: string, param1: string, param2: string);
				}
			}
		}
	}
}

import javautilComparator = java.util.Comparator;
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FilenameFilter.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class Utils {
					public static capFileCount(param0: javaioFile, param1: javaioFilenameFilter, param2: number, param3: javautilComparator): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export class WireFormat {
					public static WIRETYPE_VARINT: number;
					public static WIRETYPE_FIXED64: number;
					public static WIRETYPE_LENGTH_DELIMITED: number;
					public static WIRETYPE_START_GROUP: number;
					public static WIRETYPE_END_GROUP: number;
					public static WIRETYPE_FIXED32: number;
					public static getTagFieldNumber(param0: number): number;
				}
				export module WireFormat {
					export class FieldType {
						public static DOUBLE: com.crashlytics.android.core.WireFormat.FieldType;
						public static FLOAT: com.crashlytics.android.core.WireFormat.FieldType;
						public static INT64: com.crashlytics.android.core.WireFormat.FieldType;
						public static UINT64: com.crashlytics.android.core.WireFormat.FieldType;
						public static INT32: com.crashlytics.android.core.WireFormat.FieldType;
						public static FIXED64: com.crashlytics.android.core.WireFormat.FieldType;
						public static FIXED32: com.crashlytics.android.core.WireFormat.FieldType;
						public static BOOL: com.crashlytics.android.core.WireFormat.FieldType;
						public static STRING: com.crashlytics.android.core.WireFormat.FieldType;
						public static GROUP: com.crashlytics.android.core.WireFormat.FieldType;
						public static MESSAGE: com.crashlytics.android.core.WireFormat.FieldType;
						public static BYTES: com.crashlytics.android.core.WireFormat.FieldType;
						public static UINT32: com.crashlytics.android.core.WireFormat.FieldType;
						public static ENUM: com.crashlytics.android.core.WireFormat.FieldType;
						public static SFIXED32: com.crashlytics.android.core.WireFormat.FieldType;
						public static SFIXED64: com.crashlytics.android.core.WireFormat.FieldType;
						public static SINT32: com.crashlytics.android.core.WireFormat.FieldType;
						public static SINT64: com.crashlytics.android.core.WireFormat.FieldType;
						public isPackable(): boolean;
						public static values(): native.Array<com.crashlytics.android.core.WireFormat.FieldType>;
						public getJavaType(): com.crashlytics.android.core.WireFormat.JavaType;
						public getWireType(): number;
						public static valueOf(param0: string): com.crashlytics.android.core.WireFormat.FieldType;
					}
					export class JavaType {
						public static INT: com.crashlytics.android.core.WireFormat.JavaType;
						public static LONG: com.crashlytics.android.core.WireFormat.JavaType;
						public static FLOAT: com.crashlytics.android.core.WireFormat.JavaType;
						public static DOUBLE: com.crashlytics.android.core.WireFormat.JavaType;
						public static BOOLEAN: com.crashlytics.android.core.WireFormat.JavaType;
						public static STRING: com.crashlytics.android.core.WireFormat.JavaType;
						public static BYTE_STRING: com.crashlytics.android.core.WireFormat.JavaType;
						public static ENUM: com.crashlytics.android.core.WireFormat.JavaType;
						public static MESSAGE: com.crashlytics.android.core.WireFormat.JavaType;
						public static values(): native.Array<com.crashlytics.android.core.WireFormat.JavaType>;
						public static valueOf(param0: string): com.crashlytics.android.core.WireFormat.JavaType;
					}
				}
			}
		}
	}
}

/// <reference path="./com.crashlytics.android.core.internal.models.SessionEventData.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export module internal {
					export class CrashEventDataProvider {
						/**
						 * Constructs a new instance of the com.crashlytics.android.core.internal.CrashEventDataProvider interface with the provided implementation.
						 */
						public constructor(implementation: {
							getCrashEventData(): com.crashlytics.android.core.internal.models.SessionEventData;
						});
						public getCrashEventData(): com.crashlytics.android.core.internal.models.SessionEventData;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export module internal {
					export module models {
						export class BinaryImageData {
							public baseAddress: number;
							public size: number;
							public path: string;
							public id: string;
							public constructor(param0: number, param1: number, param2: string, param3: string);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export module internal {
					export module models {
						export class CustomAttributeData {
							public key: string;
							public value: string;
							public constructor(param0: string, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export module internal {
					export module models {
						export class DeviceData {
							public orientation: number;
							public totalPhysicalMemory: number;
							public totalInternalStorage: number;
							public availablePhysicalMemory: number;
							public availableInternalStorage: number;
							public batteryCapacity: number;
							public batteryVelocity: number;
							public proximity: boolean;
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.crashlytics.android.core.internal.models.BinaryImageData.d.ts" />
/// <reference path="./com.crashlytics.android.core.internal.models.CustomAttributeData.d.ts" />
/// <reference path="./com.crashlytics.android.core.internal.models.DeviceData.d.ts" />
/// <reference path="./com.crashlytics.android.core.internal.models.SignalData.d.ts" />
/// <reference path="./com.crashlytics.android.core.internal.models.ThreadData.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export module internal {
					export module models {
						export class SessionEventData {
							public timestamp: number;
							public signal: com.crashlytics.android.core.internal.models.SignalData;
							public threads: native.Array<com.crashlytics.android.core.internal.models.ThreadData>;
							public binaryImages: native.Array<com.crashlytics.android.core.internal.models.BinaryImageData>;
							public customAttributes: native.Array<com.crashlytics.android.core.internal.models.CustomAttributeData>;
							public deviceData: com.crashlytics.android.core.internal.models.DeviceData;
							public constructor(param0: number, param1: com.crashlytics.android.core.internal.models.SignalData, param2: native.Array<com.crashlytics.android.core.internal.models.ThreadData>, param3: native.Array<com.crashlytics.android.core.internal.models.BinaryImageData>, param4: native.Array<com.crashlytics.android.core.internal.models.CustomAttributeData>, param5: com.crashlytics.android.core.internal.models.DeviceData);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export module internal {
					export module models {
						export class SignalData {
							public name: string;
							public code: string;
							public faultAddress: number;
							public constructor(param0: string, param1: string, param2: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module crashlytics {
		export module android {
			export module core {
				export module internal {
					export module models {
						export class ThreadData {
							public static IMPORTANCE_CRASHED_THREAD: number;
							public name: string;
							public importance: number;
							public frames: native.Array<com.crashlytics.android.core.internal.models.ThreadData.FrameData>;
							public constructor(param0: number, param1: native.Array<com.crashlytics.android.core.internal.models.ThreadData.FrameData>);
							public constructor(param0: string, param1: number, param2: native.Array<com.crashlytics.android.core.internal.models.ThreadData.FrameData>);
						}
						export module ThreadData {
							export class FrameData {
								public address: number;
								public symbol: string;
								public file: string;
								public offset: number;
								public importance: number;
								public constructor(param0: number, param1: number);
								public constructor(param0: number, param1: string, param2: string, param3: number, param4: number);
								public constructor(param0: number, param1: string, param2: number);
							}
						}
					}
				}
			}
		}
	}
}

