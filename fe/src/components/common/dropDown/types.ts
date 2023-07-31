// export enum DropDownIndicatorName {
//   issueFilter = '이슈 필터',
//   assignee = '담당자',
//   author = '작성자',
//   label = '레이블',
//   milestone = '마일스톤',
//   issueState = '상태 수정',
//   textColor = '텍스트 색상',
// }

// export type DropDownIndicatorNameType = keyof typeof DropDownIndicatorName;

// export type IssueFilterType =
//   | '열린 이슈'
//   | '내가 작성한 이슈'
//   | '나에게 할당된 이슈'
//   | '내가 댓글을 남긴 이슈'
//   | '닫힌 이슈';

// export type IssueStateType = '열린 이슈' | '닫힌 이슈';

// export type ContributorType = {
//   id: string;
//   image: string;
// };

// export type LabelType = {
//   labelId: number;
//   name: string;
//   textColor: string;
//   backgroundColor: string;
// };

// export type MilestoneType = {
//   milestoneId: number;
//   name: string;
//   progress: number;
// };

// export type TextColorType = '밝은색' | '어두운 색';

// export type DropDownOptionsType =
//   | LabelType[]
//   | IssueFilterType[]
//   | IssueStateType[]
//   | ContributorType[]
//   | MilestoneType[]
//   | TextColorType[]
//   | string[];

/* 더미데이터 */
export const issueFilterList = [
  { filterId: 1, name: '열린 이슈' },
  { filterId: 2, name: '내가 작성한 이슈' },
  { filterId: 3, name: '나에게 할당된 이슈' },
  { filterId: 4, name: '내가 댓글을 남긴 이슈' },
  { filterId: 5, name: '닫힌 이슈' },
];

export const issueStateList = ['열린 이슈', '닫힌 이슈'];

export const contributors = [
  {
    id: 'bono1234',
    image:
      'https://item.kakaocdn.net/do/6554be44bf80540c7afa12cf4d9b9b7e9f5287469802eca457586a25a096fd31',
  },
  {
    id: 'ayaan1234',
    image:
      'https://item.kakaocdn.net/do/6554be44bf80540c7afa12cf4d9b9b7e9f5287469802eca457586a25a096fd31',
  },
];

export const labels = [
  {
    labelId: 1,
    name: 'feat',
    textColor: 'light',
    backgroundColor: '#FF0000',
  },
  {
    labelId: 2,
    name: 'fix',
    textColor: 'dark',
    backgroundColor: '#800000',
  },
];

export const milestones = [
  {
    milestoneId: 1,
    name: '마일스톤1',
    progress: 34,
  },
  {
    milestoneId: 2,
    name: '마일스톤2',
    progress: 78,
  },
  {
    milestoneId: 3,
    name: '마일스톤이매우길어졌을때어쩌구저쩌구머;리ㅏㅓㄴㅇ리ㅏ머',
    progress: 78,
  },
];

export const textColors = [
  { textColorsId: 1, name: '밝은색' },
  { textColorsId: 2, name: '어두운 색' },
];
