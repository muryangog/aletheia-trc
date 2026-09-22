import {
  SERMONS_AUDIO,
  AUDIO_PREACHERS,
  RADIO_CHANNELS,
  RADIO_PLAYLIST,
  VIDEO_CATEGORIES,
  PODCAST_CATEGORIES,
} from "@/data/sermons.data";

export const sermonsService = {
  getAudioSermons: () => SERMONS_AUDIO,
  getAudioPreachers: () => AUDIO_PREACHERS,
  getRadioChannels: () => RADIO_CHANNELS,
  getRadioPlaylist: () => RADIO_PLAYLIST,
  getVideoCategories: () => VIDEO_CATEGORIES,
  getPodcastCategories: () => PODCAST_CATEGORIES,

  filterAudios: (query = "", preacher = "Tous") => {
    return SERMONS_AUDIO.filter((sermon) => {
      const matchesSearch =
        !query ||
        sermon.title.toLowerCase().includes(query.toLowerCase()) ||
        sermon.series.toLowerCase().includes(query.toLowerCase());
      const matchesPreacher =
        preacher === "Tous" || sermon.preacher === preacher;
      return matchesSearch && matchesPreacher;
    });
  },
};
