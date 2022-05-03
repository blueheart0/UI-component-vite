import { Node } from "@flatten-js/interval-tree";

export type DateSchedulerEvent = { dateBegin: Date; dateEnd: Date; id: string };
export type DateSchedulerEventSearch = {
  dateBegin?: Date;
  dateEnd?: Date;
  id?: string;
};
export type DateSchedulerEventSearchResultItem = {
  event: DateSchedulerEvent;
  friends: DateSchedulerEvent[];
  maxFriendsCount: number;
  maxTimeColumn?: number;
};

export declare interface DateSchedulerClass {
  get keys(): Node<string>[];

  get values(): string[];

  add(item: DateSchedulerEvent): void;

  remove(id: string): void;

  update(item: DateSchedulerEvent): void;

  search(
    item: DateSchedulerEventSearch
  ): DateSchedulerEventSearchResultItem[] | DateSchedulerEvent;
}
