/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ErrorResponse {
  message?: string | null;
  errors?: Record<string, string[]>;
}

export enum FileType {
  Jpg = "Jpg",
  Jpeg = "Jpeg",
  Png = "Png",
  Pdf = "Pdf",
  Txt = "Txt",
  Doc = "Doc",
  Docx = "Docx",
  Xls = "Xls",
  Xlsx = "Xlsx",
}

export interface GetEventEntry {
  /** @format uuid */
  id: string;
  name: string;
  description?: string | null;

  /** @format date-time */
  createdDate: string;

  /** @format date-time */
  eventDateStart: string;

  /** @format date-time */
  eventDateEnd?: string;
  userId: string;
  isCompleted: boolean;
  user: GetUserEntry;
  participants?: GetParticipantEntry[] | null;
  shoppings?: GetShoppingEntry[] | null;
  medias?: GetMediaEntry[] | null;
}

export interface GetEventEntryResponse {
  data?: GetEventEntry[] | null;

  /** @format int32 */
  totalPages?: number;

  /** @format int32 */
  total?: number;
}

export interface GetMediaEntry {
  /** @format uuid */
  id?: string;
  fileType?: FileType;
  mediaUid?: string | null;
  mediaType?: MediaType;
  link?: string | null;
  event?: GetEventEntry;
}

export interface GetParticipantEntry {
  /** @format uuid */
  id: string;
  user: GetUserEntry;
  event: GetEventEntry;
  shoppings?: GetShoppingEntry[] | null;
  purchaseUsages?: GetPurchaseUsageEntry[] | null;
}

export interface GetParticipantEntryResponse {
  data?: GetParticipantEntry[] | null;

  /** @format int32 */
  totalPages?: number;

  /** @format int32 */
  total?: number;
}

export interface GetPurchaseEntry {
  /** @format uuid */
  id: string;
  name: string;

  /** @format double */
  cost: number;

  /** @format double */
  weight?: number;

  /** @format int32 */
  count?: number;
  shopping: GetShoppingEntry;
  purchaseTags?: GetPurchaseTagEntry[] | null;
  unitType: GetUnitTypeEntry;
  purchaseUsages?: GetPurchaseUsageEntry[] | null;
}

export interface GetPurchaseEntryResponse {
  data?: GetPurchaseEntry[] | null;

  /** @format int32 */
  totalPages?: number;

  /** @format int32 */
  total?: number;
}

export interface GetPurchaseTagEntry {
  /** @format uuid */
  id: string;
  name: string;
  purchases?: GetPurchaseEntry[] | null;
}

export interface GetPurchaseTagEntryResponse {
  data?: GetPurchaseTagEntry[] | null;

  /** @format int32 */
  totalPages?: number;

  /** @format int32 */
  total?: number;
}

export interface GetPurchaseUsageEntry {
  /** @format uuid */
  id: string;
  participant: GetParticipantEntry;
  purchase: GetPurchaseEntry;
}

export interface GetPurchaseUsageEntryResponse {
  data?: GetPurchaseUsageEntry[] | null;

  /** @format int32 */
  totalPages?: number;

  /** @format int32 */
  total?: number;
}

export interface GetShoppingEntry {
  /** @format uuid */
  id: string;

  /** @format date-time */
  shoppingDate: string;
  check?: string | null;
  description: string;
  event: GetEventEntry;
  participant: GetParticipantEntry;
  purchases?: GetPurchaseEntry[] | null;
}

export interface GetShoppingEntryResponse {
  data?: GetShoppingEntry[] | null;

  /** @format int32 */
  totalPages?: number;

  /** @format int32 */
  total?: number;
}

export interface GetUnitTypeEntry {
  /** @format uuid */
  id: string;
  name: string;
  purchases?: GetPurchaseEntry[] | null;
}

export interface GetUnitTypeEntryResponse {
  data?: GetUnitTypeEntry[] | null;

  /** @format int32 */
  totalPages?: number;

  /** @format int32 */
  total?: number;
}

export interface GetUserEntry {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  role?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  phone?: string | null;
}

export interface IdentityRole {
  id?: string | null;
  name?: string | null;
  normalizedName?: string | null;
  concurrencyStamp?: string | null;
}

export interface LoginModel {
  username: string;
  password: string;
}

export enum MediaType {
  Image = "Image",
  Video = "Video",
  Audio = "Audio",
  Document = "Document",
  Link = "Link",
  Unknown = "Unknown",
}

export interface RegisterModel {
  username: string;

  /** @format email */
  email: string;
  password: string;
}

export interface UpsertEventEntry {
  name: string;
  description?: string | null;

  /** @format date-time */
  eventDateStart: string;

  /** @format date-time */
  eventDateEnd?: string;
  isCompleted: boolean;
  userId: string;
  isActive?: boolean;
}

export interface UpsertParticipantEntry {
  /** @format uuid */
  eventId: string;
  isActive?: boolean;
  userId: string;
}

export interface UpsertPurchaseEntry {
  name: string;

  /** @format double */
  cost: number;

  /** @format double */
  weight?: number;

  /** @format int32 */
  count?: number;

  /** @format uuid */
  shoppingId: string;
  purchaseTags: string[];

  /** @format uuid */
  unitTypeId: string;
  isActive?: boolean;
}

export interface UpsertPurchaseTagEntry {
  name: string;
  isActive?: boolean;
}

export interface UpsertPurchaseUsageEntry {
  /** @format uuid */
  purchaseId: string;

  /** @format uuid */
  participantId: string;
}

export interface UpsertShoppingEntry {
  /** @format date-time */
  shoppingDate: string;

  /** @format uuid */
  participantId: string;

  /** @format uuid */
  eventId: string;
  check?: string | null;
  description: string;
  isActive?: boolean;
}

export interface UpsertUnitTypeEntry {
  name: string;
  isActive?: boolean;
}

export interface UserEntry {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  role?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  phone?: string | null;
}

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: Iterable<any> =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData
          ? { "Content-Type": type }
          : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title StuffyHelper.Hosting
 * @version 1.0
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Authorization
     * @name AuthRegisterCreate
     * @request POST:/api/auth/register
     * @secure
     */
    authRegisterCreate: (data: RegisterModel, params: RequestParams = {}) =>
      this.request<GetUserEntry, ErrorResponse>({
        path: `/api/auth/register`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthLoginCreate
     * @request POST:/api/auth/login
     * @secure
     */
    authLoginCreate: (data: LoginModel, params: RequestParams = {}) =>
      this.request<GetUserEntry, ErrorResponse>({
        path: `/api/auth/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthLogoutCreate
     * @request POST:/api/auth/logout
     * @secure
     */
    authLogoutCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/auth/logout`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthRolesList
     * @request GET:/api/auth/roles
     * @secure
     */
    authRolesList: (params: RequestParams = {}) =>
      this.request<IdentityRole, ErrorResponse>({
        path: `/api/auth/roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthIsAdminList
     * @request GET:/api/auth/is-admin
     * @secure
     */
    authIsAdminList: (params: RequestParams = {}) =>
      this.request<boolean, ErrorResponse>({
        path: `/api/auth/is-admin`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthAccountList
     * @request GET:/api/auth/account
     * @secure
     */
    authAccountList: (params: RequestParams = {}) =>
      this.request<GetUserEntry, ErrorResponse>({
        path: `/api/auth/account`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthUsersList
     * @request GET:/api/auth/users
     * @secure
     */
    authUsersList: (
      query?: { userName?: string },
      params: RequestParams = {}
    ) =>
      this.request<UserEntry[], ErrorResponse>({
        path: `/api/auth/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthEditPartialUpdate
     * @request PATCH:/api/auth/edit
     * @secure
     */
    authEditPartialUpdate: (
      query: {
        Username: string;
        Email?: string;
        Password?: string;
        FirstName?: string;
        MiddleName?: string;
        LastName?: string;
        Phone?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<UserEntry, ErrorResponse>({
        path: `/api/auth/edit`,
        method: "PATCH",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Event
     * @name EventsList
     * @request GET:/api/events
     * @secure
     */
    eventsList: (
      query?: {
        offset?: number;
        limit?: number;
        name?: string;
        description?: string;
        createdDateStart?: string;
        createdDateEnd?: string;
        eventDateStartMin?: string;
        eventDateStartMax?: string;
        eventDateEndMin?: string;
        eventDateEndMax?: string;
        userId?: string;
        isCompleted?: boolean;
        isActive?: boolean;
        participantId?: string;
        shoppingId?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetEventEntryResponse, ErrorResponse | void>({
        path: `/api/events`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Event
     * @name EventsCreate
     * @request POST:/api/events
     * @secure
     */
    eventsCreate: (data: UpsertEventEntry, params: RequestParams = {}) =>
      this.request<GetEventEntry, ErrorResponse>({
        path: `/api/events`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Event
     * @name EventsDetail
     * @request GET:/api/events/{eventId}
     * @secure
     */
    eventsDetail: (eventId: string, params: RequestParams = {}) =>
      this.request<GetEventEntry, ErrorResponse | void>({
        path: `/api/events/${eventId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Event
     * @name EventsDelete
     * @request DELETE:/api/events/{eventId}
     * @secure
     */
    eventsDelete: (eventId: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/api/events/${eventId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Event
     * @name EventsPartialUpdate
     * @request PATCH:/api/events/{eventId}
     * @secure
     */
    eventsPartialUpdate: (
      eventId: string,
      data: UpsertEventEntry,
      params: RequestParams = {}
    ) =>
      this.request<GetEventEntry, ErrorResponse>({
        path: `/api/events/${eventId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name EventsMediaFormFileCreate
     * @request POST:/api/events/{eventId}/media/form-file
     * @secure
     */
    eventsMediaFormFileCreate: (
      eventId: string,
      query: { mediaType: MediaType; link?: string },
      data: { file?: File },
      params: RequestParams = {}
    ) =>
      this.request<GetMediaEntry, ErrorResponse>({
        path: `/api/events/${eventId}/media/form-file`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name EventsMediaFormFileDetail
     * @request GET:/api/events/{eventId}/media/{mediaUid}/form-file
     * @secure
     */
    eventsMediaFormFileDetail: (
      eventId: string,
      mediaUid: string,
      params: RequestParams = {}
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/events/${eventId}/media/${mediaUid}/form-file`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name EventsMediaMetadataDetail
     * @request GET:/api/events/{eventId}/media/{mediaUid}/metadata
     * @secure
     */
    eventsMediaMetadataDetail: (
      eventId: string,
      mediaUid: string,
      params: RequestParams = {}
    ) =>
      this.request<GetMediaEntry, ErrorResponse>({
        path: `/api/events/${eventId}/media/${mediaUid}/metadata`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name EventsMediaDelete
     * @request DELETE:/api/events/{eventId}/media/{mediaUid}
     * @secure
     */
    eventsMediaDelete: (
      eventId: string,
      mediaUid: string,
      params: RequestParams = {}
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/events/${eventId}/media/${mediaUid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name MediaMetadataList
     * @request GET:/api/media/metadata
     * @secure
     */
    mediaMetadataList: (
      query?: {
        offset?: number;
        limit?: number;
        eventId?: string;
        createdDateStart?: string;
        createdDateEnd?: string;
        mediaType?: MediaType;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetMediaEntry[], ErrorResponse>({
        path: `/api/media/metadata`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Participant
     * @name ParticipantsList
     * @request GET:/api/participants
     * @secure
     */
    participantsList: (
      query?: {
        offset?: number;
        limit?: number;
        eventId?: string;
        userId?: string;
        isActive?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetParticipantEntryResponse, ErrorResponse | void>({
        path: `/api/participants`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Participant
     * @name ParticipantsCreate
     * @request POST:/api/participants
     * @secure
     */
    participantsCreate: (
      data: UpsertParticipantEntry,
      params: RequestParams = {}
    ) =>
      this.request<GetParticipantEntry, ErrorResponse>({
        path: `/api/participants`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Participant
     * @name ParticipantsDetail
     * @request GET:/api/participants/{participantId}
     * @secure
     */
    participantsDetail: (participantId: string, params: RequestParams = {}) =>
      this.request<GetParticipantEntry, ErrorResponse | void>({
        path: `/api/participants/${participantId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Participant
     * @name ParticipantsDelete
     * @request DELETE:/api/participants/{participantId}
     * @secure
     */
    participantsDelete: (participantId: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/api/participants/${participantId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Participant
     * @name ParticipantsPartialUpdate
     * @request PATCH:/api/participants/{participantId}
     * @secure
     */
    participantsPartialUpdate: (
      participantId: string,
      data: UpsertParticipantEntry,
      params: RequestParams = {}
    ) =>
      this.request<GetParticipantEntry, ErrorResponse>({
        path: `/api/participants/${participantId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Purchase
     * @name PurchasesList
     * @request GET:/api/purchases
     * @secure
     */
    purchasesList: (
      query?: {
        offset?: number;
        limit?: number;
        name?: string;
        countMin?: number;
        countMax?: number;
        costMin?: number;
        costMax?: number;
        weightMin?: number;
        weightMax?: number;
        shoppingId?: string;
        purchaseTags?: string[];
        unitTypeId?: string;
        isActive?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetPurchaseEntryResponse, ErrorResponse | void>({
        path: `/api/purchases`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Purchase
     * @name PurchasesCreate
     * @request POST:/api/purchases
     * @secure
     */
    purchasesCreate: (data: UpsertPurchaseEntry, params: RequestParams = {}) =>
      this.request<GetPurchaseEntry, ErrorResponse>({
        path: `/api/purchases`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Purchase
     * @name PurchasesDetail
     * @request GET:/api/purchases/{purchaseId}
     * @secure
     */
    purchasesDetail: (purchaseId: string, params: RequestParams = {}) =>
      this.request<GetPurchaseEntry, ErrorResponse | void>({
        path: `/api/purchases/${purchaseId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Purchase
     * @name PurchasesDelete
     * @request DELETE:/api/purchases/{purchaseId}
     * @secure
     */
    purchasesDelete: (purchaseId: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/api/purchases/${purchaseId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Purchase
     * @name PurchasesPartialUpdate
     * @request PATCH:/api/purchases/{purchaseId}
     * @secure
     */
    purchasesPartialUpdate: (
      purchaseId: string,
      data: UpsertPurchaseEntry,
      params: RequestParams = {}
    ) =>
      this.request<GetPurchaseEntry, ErrorResponse>({
        path: `/api/purchases/${purchaseId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseTag
     * @name PurchaseTagsList
     * @request GET:/api/purchase-tags
     * @secure
     */
    purchaseTagsList: (
      query?: {
        offset?: number;
        limit?: number;
        name?: string;
        purchaseId?: string;
        isActive?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetPurchaseTagEntryResponse, ErrorResponse | void>({
        path: `/api/purchase-tags`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseTag
     * @name PurchaseTagsCreate
     * @request POST:/api/purchase-tags
     * @secure
     */
    purchaseTagsCreate: (
      data: UpsertPurchaseTagEntry,
      params: RequestParams = {}
    ) =>
      this.request<GetPurchaseTagEntry, ErrorResponse>({
        path: `/api/purchase-tags`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseTag
     * @name PurchaseTagsDetail
     * @request GET:/api/purchase-tags/{purchaseTagId}
     * @secure
     */
    purchaseTagsDetail: (purchaseTagId: string, params: RequestParams = {}) =>
      this.request<GetPurchaseTagEntry, ErrorResponse | void>({
        path: `/api/purchase-tags/${purchaseTagId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseTag
     * @name PurchaseTagsDelete
     * @request DELETE:/api/purchase-tags/{purchaseTagId}
     * @secure
     */
    purchaseTagsDelete: (purchaseTagId: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/api/purchase-tags/${purchaseTagId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseTag
     * @name PurchaseTagsPartialUpdate
     * @request PATCH:/api/purchase-tags/{purchaseTagId}
     * @secure
     */
    purchaseTagsPartialUpdate: (
      purchaseTagId: string,
      data: UpsertPurchaseTagEntry,
      params: RequestParams = {}
    ) =>
      this.request<GetPurchaseTagEntry, ErrorResponse>({
        path: `/api/purchase-tags/${purchaseTagId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseUsage
     * @name PurchaseUsagesList
     * @request GET:/api/purchase-usages
     * @secure
     */
    purchaseUsagesList: (
      query?: {
        offset?: number;
        limit?: number;
        participantId?: string;
        purchaseId?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetPurchaseUsageEntryResponse, ErrorResponse | void>({
        path: `/api/purchase-usages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseUsage
     * @name PurchaseUsagesCreate
     * @request POST:/api/purchase-usages
     * @secure
     */
    purchaseUsagesCreate: (
      data: UpsertPurchaseUsageEntry,
      params: RequestParams = {}
    ) =>
      this.request<GetPurchaseUsageEntry, ErrorResponse>({
        path: `/api/purchase-usages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseUsage
     * @name PurchaseUsagesDetail
     * @request GET:/api/purchase-usages/{purchaseUsageId}
     * @secure
     */
    purchaseUsagesDetail: (
      purchaseUsageId: string,
      params: RequestParams = {}
    ) =>
      this.request<GetPurchaseUsageEntry, ErrorResponse | void>({
        path: `/api/purchase-usages/${purchaseUsageId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseUsage
     * @name PurchaseUsagesDelete
     * @request DELETE:/api/purchase-usages/{purchaseUsageId}
     * @secure
     */
    purchaseUsagesDelete: (
      purchaseUsageId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/purchase-usages/${purchaseUsageId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseUsage
     * @name PurchaseUsagesPartialUpdate
     * @request PATCH:/api/purchase-usages/{purchaseUsageId}
     * @secure
     */
    purchaseUsagesPartialUpdate: (
      purchaseUsageId: string,
      data: UpsertPurchaseUsageEntry,
      params: RequestParams = {}
    ) =>
      this.request<GetPurchaseUsageEntry, ErrorResponse>({
        path: `/api/purchase-usages/${purchaseUsageId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Shopping
     * @name ShoppingsList
     * @request GET:/api/shoppings
     * @secure
     */
    shoppingsList: (
      query?: {
        offset?: number;
        limit?: number;
        shoppingDateStart?: string;
        shoppingDateEnd?: string;
        participantId?: string;
        eventId?: string;
        description?: string;
        isActive?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetShoppingEntryResponse, ErrorResponse | void>({
        path: `/api/shoppings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Shopping
     * @name ShoppingsCreate
     * @request POST:/api/shoppings
     * @secure
     */
    shoppingsCreate: (data: UpsertShoppingEntry, params: RequestParams = {}) =>
      this.request<GetShoppingEntry, ErrorResponse>({
        path: `/api/shoppings`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Shopping
     * @name ShoppingsDetail
     * @request GET:/api/shoppings/{shoppingId}
     * @secure
     */
    shoppingsDetail: (shoppingId: string, params: RequestParams = {}) =>
      this.request<GetShoppingEntry, ErrorResponse | void>({
        path: `/api/shoppings/${shoppingId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Shopping
     * @name ShoppingsDelete
     * @request DELETE:/api/shoppings/{shoppingId}
     * @secure
     */
    shoppingsDelete: (shoppingId: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/api/shoppings/${shoppingId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Shopping
     * @name ShoppingsPartialUpdate
     * @request PATCH:/api/shoppings/{shoppingId}
     * @secure
     */
    shoppingsPartialUpdate: (
      shoppingId: string,
      data: UpsertShoppingEntry,
      params: RequestParams = {}
    ) =>
      this.request<GetShoppingEntry, ErrorResponse>({
        path: `/api/shoppings/${shoppingId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UnitType
     * @name UnitTypesList
     * @request GET:/api/unit-types
     * @secure
     */
    unitTypesList: (
      query?: {
        offset?: number;
        limit?: number;
        name?: string;
        purchaseId?: string;
        isActive?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetUnitTypeEntryResponse, ErrorResponse | void>({
        path: `/api/unit-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UnitType
     * @name UnitTypesCreate
     * @request POST:/api/unit-types
     * @secure
     */
    unitTypesCreate: (data: UpsertUnitTypeEntry, params: RequestParams = {}) =>
      this.request<GetUnitTypeEntry, ErrorResponse>({
        path: `/api/unit-types`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UnitType
     * @name UnitTypesDetail
     * @request GET:/api/unit-types/{unitTypeId}
     * @secure
     */
    unitTypesDetail: (unitTypeId: string, params: RequestParams = {}) =>
      this.request<GetUnitTypeEntry, ErrorResponse | void>({
        path: `/api/unit-types/${unitTypeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UnitType
     * @name UnitTypesDelete
     * @request DELETE:/api/unit-types/{unitTypeId}
     * @secure
     */
    unitTypesDelete: (unitTypeId: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/api/unit-types/${unitTypeId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UnitType
     * @name UnitTypesPartialUpdate
     * @request PATCH:/api/unit-types/{unitTypeId}
     * @secure
     */
    unitTypesPartialUpdate: (
      unitTypeId: string,
      data: UpsertUnitTypeEntry,
      params: RequestParams = {}
    ) =>
      this.request<GetUnitTypeEntry, ErrorResponse>({
        path: `/api/unit-types/${unitTypeId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
