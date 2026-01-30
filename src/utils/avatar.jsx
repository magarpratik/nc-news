import multiavatar from "@multiavatar/multiavatar/esm";

export const avatarSrc = (name) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(multiavatar(name))}`;
