import * as Yup from "yup";

const VideoSchema = Yup.object().shape({
  video_type: Yup.string().required("Video type yazılmalıdır"),
  video:Yup.string().required("Video url yazılmalıdır"),
video_title:Yup.string().required("Video title yazılmalıdır"),
video_cover:Yup.string().required("Video üçün cover image url yazılmalıdır"),
video_music:Yup.string().required("Video mp3 url yazılmalıdır"),
video_level:Yup.string().required("Video level bəlli edilməlidir "),
});

export { VideoSchema };
