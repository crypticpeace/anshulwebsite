// EDIT YOUR CONTENT HERE
export const INFO = {
  name: "Anshul Surve",
};
// WORK VIDEOS: streamed from Google Drive (folder must stay "Anyone with the link can view").
// To add a video: upload it to the Drive folder, copy the ID from its share link
// (drive.google.com/file/d/<ID>/view) and add a line below. Order here = order on the site.
// Add  landscape: true  for 16:9 videos; everything else is framed as a 9:16 reel.
export type VideoItem = { id: string; title: string; landscape?: boolean };
export const VIDEOS: VideoItem[] = [
  { id: "1Ab_ACghNbX4DYj7zLYWX2BRXBvqGF-B3", title: "AM is Open Now" },
  { id: "1VnZ54_yTcac-z-LpDTrfLc1fmhOG-BCC", title: "1 Day to Go" },
  { id: "1IdVMJmAWMsoMvxxk2uIWQeaw9L8P5qi6", title: "Noti Binodini" },
  { id: "1VFMr-VxqYlyUP1700h2sict603-zyVbu", title: "Lighting Mistakes" },
  { id: "1S6RIKJt1Eyo5vUA84uL8OLtQBxqYzC7g", title: "Countdown" },
  { id: "1D3ugDx1ULbjnh1Weo4I0taCyKqNjZjKv", title: "The Wait Is Over" },
  { id: "1PLhDT3isDwZcrOA4GoIQnDbNNuX5ngZv", title: "Early Bird Tickets to Art Mumbai Are Live" },
  { id: "1hZwFYbjIxHnG2QbST3d9EFT1oduXfhdh", title: "10 Days Until Tickets" },
  { id: "1B55CLYHo5loITiXCYtA26loqNCa5vc4G", title: "Announcement Reel" },
  { id: "100SUMFM7Ne7j2qEWmLWsPAwsp9yxt9KR", title: "Food 1" },
];
export const driveThumb = (id: string, w = 720) => `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`;
export const drivePlayer = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
export const MOTION = [
  { title: "Kinetic Typography", color: "#D6DE23" },
  { title: "Logo Reveal", color: "#111111" },
  { title: "Explainer Video", color: "#E4572E" },
  { title: "Social Motion Pack", color: "#2E86AB" },
  { title: "Title Sequence", color: "#7B2CBF" },
  { title: "Product Animation", color: "#06A77D" },
];
export const EXPERIENCE = [
  {
    company: "Aurion Digital",
    role: "Video Editor",
    duration: "1 year",
    description:
      "Editing short-form reels, launch teasers and campaign videos for brand clients. I handle the full edit, from pacing and motion graphics to colour and sound, building every cut to hold attention from the first second.",
  },
];
export const STATS = [["10+", "Projects"], ["1", "Year"], ["5+", "Clients"]];
