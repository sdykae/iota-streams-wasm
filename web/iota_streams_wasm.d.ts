/* tslint:disable */
/* eslint-disable */
/**
*/
export function set_panic_hook(): void;
/**
*/
export enum ChannelType {
  SingleBranch,
  MultiBranch,
  SingleDepth,
}
/**
*/
export class Address {
  free(): void;
/**
* @param {string} link
* @returns {Address}
*/
  static from_string(link: string): Address;
/**
* @returns {string}
*/
  to_string(): string;
/**
* @returns {Address}
*/
  copy(): Address;
/**
* @returns {string}
*/
  addr_id: string;
/**
* @returns {string}
*/
  msg_id: string;
}
/**
*/
export class Author {
  free(): void;
/**
* @param {string} seed
* @param {SendOptions} options
* @param {number} implementation
*/
  constructor(seed: string, options: SendOptions, implementation: number);
/**
* @param {Client} client
* @param {string} seed
* @param {number} implementation
* @returns {Author}
*/
  static from_client(client: Client, seed: string, implementation: number): Author;
/**
* @param {Client} client
* @param {Uint8Array} bytes
* @param {string} password
* @returns {Author}
*/
  static import(client: Client, bytes: Uint8Array, password: string): Author;
/**
* @param {string} password
* @returns {Uint8Array}
*/
  export(password: string): Uint8Array;
/**
* @returns {Author}
*/
  clone(): Author;
/**
* @returns {string}
*/
  channel_address(): string;
/**
* @returns {boolean}
*/
  is_multi_branching(): boolean;
/**
* @returns {string}
*/
  get_public_key(): string;
/**
* @returns {any}
*/
  send_announce(): any;
/**
* @param {Address} link
* @returns {any}
*/
  send_keyload_for_everyone(link: Address): any;
/**
* @param {Address} link
* @param {PskIds} psk_ids
* @param {PublicKeys} sig_pks
* @returns {any}
*/
  send_keyload(link: Address, psk_ids: PskIds, sig_pks: PublicKeys): any;
/**
* @param {Address} link
* @param {Uint8Array} public_payload
* @param {Uint8Array} masked_payload
* @returns {any}
*/
  send_tagged_packet(link: Address, public_payload: Uint8Array, masked_payload: Uint8Array): any;
/**
* @param {Address} link
* @param {Uint8Array} public_payload
* @param {Uint8Array} masked_payload
* @returns {any}
*/
  send_signed_packet(link: Address, public_payload: Uint8Array, masked_payload: Uint8Array): any;
/**
* @param {Address} link_to
* @returns {any}
*/
  receive_subscribe(link_to: Address): any;
/**
* @param {Address} link
* @returns {any}
*/
  receive_tagged_packet(link: Address): any;
/**
* @param {Address} link
* @returns {any}
*/
  receive_signed_packet(link: Address): any;
/**
* @param {Address} link
* @returns {any}
*/
  receive_sequence(link: Address): any;
/**
* @param {Address} link
* @returns {any}
*/
  receive_msg(link: Address): any;
/**
* @returns {any}
*/
  sync_state(): any;
/**
* @returns {any}
*/
  fetch_next_msgs(): any;
/**
* @param {Address} link
* @returns {any}
*/
  fetch_prev_msg(link: Address): any;
/**
* @param {Address} link
* @param {number} num_msgs
* @returns {any}
*/
  fetch_prev_msgs(link: Address, num_msgs: number): any;
/**
* @returns {any}
*/
  gen_next_msg_ids(): any;
}
/**
*/
export class Client {
  free(): void;
/**
* @param {string} node
* @param {SendOptions} options
*/
  constructor(node: string, options: SendOptions);
}
/**
*/
export class Message {
  free(): void;
/**
* @returns {Message}
*/
  static default(): Message;
/**
* @param {string | undefined} pk
* @param {Uint8Array} public_payload
* @param {Uint8Array} masked_payload
* @returns {Message}
*/
  static new(pk: string | undefined, public_payload: Uint8Array, masked_payload: Uint8Array): Message;
/**
* @returns {string}
*/
  get_pk(): string;
/**
* @returns {Array<any>}
*/
  get_public_payload(): Array<any>;
/**
* @returns {Array<any>}
*/
  get_masked_payload(): Array<any>;
}
/**
*/
export class NextMsgId {
  free(): void;
/**
* @param {string} pk
* @param {Address} msgid
* @returns {NextMsgId}
*/
  static new(pk: string, msgid: Address): NextMsgId;
/**
* @returns {string}
*/
  get_pk(): string;
/**
* @returns {Address}
*/
  get_link(): Address;
}
/**
*/
export class PskIds {
  free(): void;
/**
* @returns {PskIds}
*/
  static new(): PskIds;
/**
* @param {string} id
*/
  add(id: string): void;
/**
* @returns {Array<any>}
*/
  get_ids(): Array<any>;
}
/**
*/
export class PublicKeys {
  free(): void;
/**
* @returns {PublicKeys}
*/
  static new(): PublicKeys;
/**
* @param {string} id
*/
  add(id: string): void;
/**
* @returns {Array<any>}
*/
  get_pks(): Array<any>;
}
/**
*/
export class SendOptions {
  free(): void;
/**
* @param {string} url
* @param {boolean} local_pow
*/
  constructor(url: string, local_pow: boolean);
/**
* @returns {SendOptions}
*/
  clone(): SendOptions;
/**
* @returns {boolean}
*/
  local_pow: boolean;
/**
* @returns {string}
*/
  url: string;
}
/**
*/
export class Subscriber {
  free(): void;
/**
* @param {string} seed
* @param {SendOptions} options
*/
  constructor(seed: string, options: SendOptions);
/**
* @param {Client} client
* @param {string} seed
* @returns {Subscriber}
*/
  static from_client(client: Client, seed: string): Subscriber;
/**
* @param {Client} client
* @param {Uint8Array} bytes
* @param {string} password
* @returns {Subscriber}
*/
  static import(client: Client, bytes: Uint8Array, password: string): Subscriber;
/**
* @returns {Subscriber}
*/
  clone(): Subscriber;
/**
* @returns {string}
*/
  channel_address(): string;
/**
* @returns {boolean}
*/
  is_multi_branching(): boolean;
/**
* @returns {string}
*/
  get_public_key(): string;
/**
* @returns {boolean}
*/
  is_registered(): boolean;
/**
*/
  unregister(): void;
/**
* @param {string} password
* @returns {Uint8Array}
*/
  export(password: string): Uint8Array;
/**
* @param {Address} link
* @returns {any}
*/
  receive_announcement(link: Address): any;
/**
* @param {Address} link
* @returns {any}
*/
  receive_keyload(link: Address): any;
/**
* @param {Address} link
* @returns {any}
*/
  receive_tagged_packet(link: Address): any;
/**
* @param {Address} link
* @returns {any}
*/
  receive_signed_packet(link: Address): any;
/**
* @param {Address} link
* @returns {any}
*/
  receive_sequence(link: Address): any;
/**
* @param {Address} link
* @returns {any}
*/
  receive_msg(link: Address): any;
/**
* @param {Address} link
* @returns {any}
*/
  send_subscribe(link: Address): any;
/**
* @param {Address} link
* @param {Uint8Array} public_payload
* @param {Uint8Array} masked_payload
* @returns {any}
*/
  send_tagged_packet(link: Address, public_payload: Uint8Array, masked_payload: Uint8Array): any;
/**
* @param {Address} link
* @param {Uint8Array} public_payload
* @param {Uint8Array} masked_payload
* @returns {any}
*/
  send_signed_packet(link: Address, public_payload: Uint8Array, masked_payload: Uint8Array): any;
/**
* @returns {any}
*/
  sync_state(): any;
/**
* @returns {any}
*/
  fetch_next_msgs(): any;
/**
* @param {Address} link
* @returns {any}
*/
  fetch_prev_msg(link: Address): any;
/**
* @param {Address} link
* @param {number} num_msgs
* @returns {any}
*/
  fetch_prev_msgs(link: Address, num_msgs: number): any;
}
/**
*/
export class UserResponse {
  free(): void;
/**
* @param {Address} link
* @param {Address | undefined} seq_link
* @param {Message | undefined} message
* @returns {UserResponse}
*/
  static new(link: Address, seq_link?: Address, message?: Message): UserResponse;
/**
* @param {string} link
* @param {string | undefined} seq_link
* @param {Message | undefined} message
* @returns {UserResponse}
*/
  static from_strings(link: string, seq_link?: string, message?: Message): UserResponse;
/**
* @returns {UserResponse}
*/
  copy(): UserResponse;
/**
* @returns {Address}
*/
  get_link(): Address;
/**
* @returns {Address}
*/
  get_seq_link(): Address;
/**
* @returns {Message}
*/
  get_message(): Message;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_author_free: (a: number) => void;
  readonly author_new: (a: number, b: number, c: number, d: number) => number;
  readonly author_from_client: (a: number, b: number, c: number, d: number) => number;
  readonly author_import: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly author_export: (a: number, b: number, c: number, d: number) => void;
  readonly author_clone: (a: number) => number;
  readonly author_channel_address: (a: number, b: number) => void;
  readonly author_is_multi_branching: (a: number) => number;
  readonly author_get_public_key: (a: number, b: number) => void;
  readonly author_send_announce: (a: number) => number;
  readonly author_send_keyload_for_everyone: (a: number, b: number) => number;
  readonly author_send_keyload: (a: number, b: number, c: number, d: number) => number;
  readonly author_send_tagged_packet: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly author_send_signed_packet: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly author_receive_subscribe: (a: number, b: number) => number;
  readonly author_receive_tagged_packet: (a: number, b: number) => number;
  readonly author_receive_signed_packet: (a: number, b: number) => number;
  readonly author_receive_sequence: (a: number, b: number) => number;
  readonly author_receive_msg: (a: number, b: number) => number;
  readonly author_sync_state: (a: number) => number;
  readonly author_fetch_next_msgs: (a: number) => number;
  readonly author_fetch_prev_msg: (a: number, b: number) => number;
  readonly author_fetch_prev_msgs: (a: number, b: number, c: number) => number;
  readonly author_gen_next_msg_ids: (a: number) => number;
  readonly __wbg_subscriber_free: (a: number) => void;
  readonly subscriber_new: (a: number, b: number, c: number) => number;
  readonly subscriber_from_client: (a: number, b: number, c: number) => number;
  readonly subscriber_import: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly subscriber_clone: (a: number) => number;
  readonly subscriber_channel_address: (a: number, b: number) => void;
  readonly subscriber_is_multi_branching: (a: number) => number;
  readonly subscriber_get_public_key: (a: number, b: number) => void;
  readonly subscriber_is_registered: (a: number) => number;
  readonly subscriber_unregister: (a: number) => void;
  readonly subscriber_export: (a: number, b: number, c: number, d: number) => void;
  readonly subscriber_receive_announcement: (a: number, b: number) => number;
  readonly subscriber_receive_keyload: (a: number, b: number) => number;
  readonly subscriber_receive_tagged_packet: (a: number, b: number) => number;
  readonly subscriber_receive_signed_packet: (a: number, b: number) => number;
  readonly subscriber_receive_sequence: (a: number, b: number) => number;
  readonly subscriber_receive_msg: (a: number, b: number) => number;
  readonly subscriber_send_subscribe: (a: number, b: number) => number;
  readonly subscriber_send_tagged_packet: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly subscriber_send_signed_packet: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly subscriber_sync_state: (a: number) => number;
  readonly subscriber_fetch_next_msgs: (a: number) => number;
  readonly subscriber_fetch_prev_msg: (a: number, b: number) => number;
  readonly subscriber_fetch_prev_msgs: (a: number, b: number, c: number) => number;
  readonly __wbg_sendoptions_free: (a: number) => void;
  readonly __wbg_get_sendoptions_local_pow: (a: number) => number;
  readonly __wbg_set_sendoptions_local_pow: (a: number, b: number) => void;
  readonly sendoptions_new: (a: number, b: number, c: number) => number;
  readonly sendoptions_set_url: (a: number, b: number, c: number) => void;
  readonly sendoptions_url: (a: number, b: number) => void;
  readonly sendoptions_clone: (a: number) => number;
  readonly __wbg_address_free: (a: number) => void;
  readonly address_addr_id: (a: number, b: number) => void;
  readonly address_set_addr_id: (a: number, b: number, c: number) => void;
  readonly address_msg_id: (a: number, b: number) => void;
  readonly address_set_msg_id: (a: number, b: number, c: number) => void;
  readonly address_from_string: (a: number, b: number) => number;
  readonly address_to_string: (a: number, b: number) => void;
  readonly address_copy: (a: number) => number;
  readonly __wbg_userresponse_free: (a: number) => void;
  readonly __wbg_nextmsgid_free: (a: number) => void;
  readonly __wbg_message_free: (a: number) => void;
  readonly __wbg_pskids_free: (a: number) => void;
  readonly pskids_new: () => number;
  readonly pskids_add: (a: number, b: number, c: number) => void;
  readonly pskids_get_ids: (a: number) => number;
  readonly __wbg_publickeys_free: (a: number) => void;
  readonly publickeys_new: () => number;
  readonly publickeys_add: (a: number, b: number, c: number) => void;
  readonly publickeys_get_pks: (a: number) => number;
  readonly message_default: () => number;
  readonly message_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly message_get_pk: (a: number, b: number) => void;
  readonly message_get_public_payload: (a: number) => number;
  readonly message_get_masked_payload: (a: number) => number;
  readonly nextmsgid_new: (a: number, b: number, c: number) => number;
  readonly nextmsgid_get_pk: (a: number, b: number) => void;
  readonly nextmsgid_get_link: (a: number) => number;
  readonly userresponse_new: (a: number, b: number, c: number) => number;
  readonly userresponse_from_strings: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly userresponse_copy: (a: number) => number;
  readonly userresponse_get_link: (a: number) => number;
  readonly userresponse_get_seq_link: (a: number) => number;
  readonly userresponse_get_message: (a: number) => number;
  readonly __wbg_client_free: (a: number) => void;
  readonly client_new: (a: number, b: number, c: number) => number;
  readonly set_panic_hook: () => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb7a3919d9e11bf8d: (a: number, b: number, c: number) => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h1843ac983edfd042: (a: number, b: number, c: number, d: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
