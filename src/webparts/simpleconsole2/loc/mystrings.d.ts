declare interface ISimpleconsole2Strings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'simpleconsole2Strings' {
  const strings: ISimpleconsole2Strings;
  export = strings;
}
