const fs = require("fs");
const pdfParse = require("pdf-parse");

// let s = "";
let s = [];

const getPDF = async (file) => {
  let readFileSync = fs.readFileSync(file);
  try {
    let pdfExtract = await pdfParse(readFileSync);
    s = pdfExtract.text.split("\n");

    const title = "Hello my name is " + s[3];
    const desc = "I am a " + s[4] + s[5] + s[6] + s[7];
    const workex =
      "I had expeience as " + s[11] + "at " + s[12] + "and " + s[29];
    const edu = "I have done " + s[52] + s[53] + s[54];
    const hobbies = "I like " + s[61].slice(2) + s[62] + s[63];
    const contact = "contact me at: " + s[66];

    const val = [
      {
        trans: title,
        bg: "https://www.shutterstock.com/image-photo/top-view-design-on-blue-260nw-2100071413.jpg",
      },
      {
        trans: desc,
        bg: "https://c4.wallpaperflare.com/wallpaper/826/524/865/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg",
      },
      {
        trans: workex,
        bg: "https://images.hdqwalls.com/wallpapers/bthumb/2023-lamborghini-huracan-gt3-evo-3s.jpg",
      },
      {
        trans: edu,
        bg: "https://img.freepik.com/premium-photo/back-school-education-banner-background_8087-1192.jpg",
      },
      {
        trans: hobbies,
        bg: "https://images.hdqwalls.com/wallpapers/bthumb/chess-pieces-ak.jpg",
      },
      {
        trans: contact,
        bg: "https://www.shutterstock.com/image-vector/contact-us-form-template-web-260nw-1753295465.jpg",
      },
    ];

    const sdk = require("api")("@rephrase-studio-api/v1.0#aiax22wldy2399p");

    sdk
      .postCampaign(
        {
          is_single_video: true,
          video_data: {
            elements: {
              scene_1_spokesperson_asset: {
                id: "scene_1_spokesperson_asset",
                draft: true,
                style: {
                  position: "absolute",
                  zIndex: 2,
                  bottom: "0em",
                  objectFit: "cover",
                  height: "37.5em",
                  width: "66.66666666666667em",
                  left: "16.666666666666664em",
                },
                asset: {
                  kind: "Spokesperson",
                  spokespersonVideo: {
                    model: "danielle_pettee_look_2_nt_aug_2022",
                    voiceId: "7bc739a4-7abc-46db-bc75-e24b6f899fa9__005",
                    langugae: "en-US",
                    output_params: {
                      video: {
                        crop: { preset: "MS" },
                        resolution: { height: 720, width: 1280 },
                        background: { alpha: 0 },
                      },
                    },
                    gender: "female",
                    transcript: `<speak> ${val[0].trans} </speak>`,
                    transcript_type: "ssml_limited",
                  },
                },
                startTime: { timeframeId: "scene_1" },
                endTime: { timeframeId: "scene_1" },
              },
              scene_1_background_image: {
                id: "scene_1_background_image",
                style: {
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  zIndex: 1,
                },
                asset: {
                  kind: "Image",
                  use: "Background",
                  url: val[0].bg,
                },
                startTime: { timeframeId: "scene_1" },
                endTime: { timeframeId: "scene_1" },
              },

              scene_2_spokesperson_asset: {
                id: "scene_2_spokesperson_asset",
                draft: true,
                style: {
                  position: "absolute",
                  zIndex: 2,
                  bottom: "0em",
                  objectFit: "cover",
                  height: "37.5em",
                  width: "66.66666666666667em",
                  left: "16.666666666666664em",
                },
                asset: {
                  kind: "Spokesperson",
                  spokespersonVideo: {
                    model: "danielle_pettee_look_2_nt_aug_2022",
                    voiceId: "7bc739a4-7abc-46db-bc75-e24b6f899fa9__005",
                    langugae: "en-US",
                    output_params: {
                      video: {
                        crop: { preset: "MS" },
                        resolution: { height: 720, width: 1280 },
                        background: { alpha: 0 },
                      },
                    },
                    gender: "female",
                    transcript: `<speak>${val[1].trans}</speak>`,
                    transcript_type: "ssml_limited",
                  },
                },
                startTime: { timeframeId: "scene_2" },
                endTime: { timeframeId: "scene_2" },
              },
              scene_2_background_image: {
                id: "scene_2_background_image",
                style: {
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  zIndex: 1,
                },
                asset: {
                  kind: "Image",
                  use: "Background",
                  url: val[1].bg,
                },
                startTime: { timeframeId: "scene_2" },
                endTime: { timeframeId: "scene_2" },
              },


              scene_3_spokesperson_asset: {
                id: "scene_3_spokesperson_asset",
                draft: true,
                style: {
                  position: "absolute",
                  zIndex: 2,
                  bottom: "0em",
                  objectFit: "cover",
                  height: "37.5em",
                  width: "66.66666666666667em",
                  left: "16.666666666666664em",
                },
                asset: {
                  kind: "Spokesperson",
                  spokespersonVideo: {
                    model: "danielle_pettee_look_2_nt_aug_2022",
                    voiceId: "7bc739a4-7abc-46db-bc75-e24b6f899fa9__005",
                    langugae: "en-US",
                    output_params: {
                      video: {
                        crop: { preset: "MS" },
                        resolution: { height: 720, width: 1280 },
                        background: { alpha: 0 },
                      },
                    },
                    gender: "female",
                    transcript: `<speak>${val[2].trans}</speak>`,
                    transcript_type: "ssml_limited",
                  },
                },
                startTime: { timeframeId: "scene_3" },
                endTime: { timeframeId: "scene_3" },
              },
              scene_3_background_image: {
                id: "scene_3_background_image",
                style: {
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  zIndex: 1,
                },
                asset: {
                  kind: "Image",
                  use: "Background",
                  url: val[2].bg,
                },
                startTime: { timeframeId: "scene_3" },
                endTime: { timeframeId: "scene_3" },
              },



              scene_4_spokesperson_asset: {
                id: "scene_4_spokesperson_asset",
                draft: true,
                style: {
                  position: "absolute",
                  zIndex: 2,
                  bottom: "0em",
                  objectFit: "cover",
                  height: "37.5em",
                  width: "66.66666666666667em",
                  left: "16.666666666666664em",
                },
                asset: {
                  kind: "Spokesperson",
                  spokespersonVideo: {
                    model: "danielle_pettee_look_2_nt_aug_2022",
                    voiceId: "7bc739a4-7abc-46db-bc75-e24b6f899fa9__005",
                    langugae: "en-US",
                    output_params: {
                      video: {
                        crop: { preset: "MS" },
                        resolution: { height: 720, width: 1280 },
                        background: { alpha: 0 },
                      },
                    },
                    gender: "female",
                    transcript: `<speak>${val[3].trans}</speak>`,
                    transcript_type: "ssml_limited",
                  },
                },
                startTime: { timeframeId: "scene_4" },
                endTime: { timeframeId: "scene_4" },
              },
              scene_4_background_image: {
                id: "scene_4_background_image",
                style: {
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  zIndex: 1,
                },
                asset: {
                  kind: "Image",
                  use: "Background",
                  url: val[3].bg,
                },
                startTime: { timeframeId: "scene_4" },
                endTime: { timeframeId: "scene_4" },
              },




              scene_5_spokesperson_asset: {
                id: "scene_5_spokesperson_asset",
                draft: true,
                style: {
                  position: "absolute",
                  zIndex: 2,
                  bottom: "0em",
                  objectFit: "cover",
                  height: "37.5em",
                  width: "66.66666666666667em",
                  left: "16.666666666666664em",
                },
                asset: {
                  kind: "Spokesperson",
                  spokespersonVideo: {
                    model: "danielle_pettee_look_2_nt_aug_2022",
                    voiceId: "7bc739a4-7abc-46db-bc75-e24b6f899fa9__005",
                    langugae: "en-US",
                    output_params: {
                      video: {
                        crop: { preset: "MS" },
                        resolution: { height: 720, width: 1280 },
                        background: { alpha: 0 },
                      },
                    },
                    gender: "female",
                    transcript: `<speak>${val[4].trans}</speak>`,
                    transcript_type: "ssml_limited",
                  },
                },
                startTime: { timeframeId: "scene_5" },
                endTime: { timeframeId: "scene_5" },
              },
              scene_5_background_image: {
                id: "scene_5_background_image",
                style: {
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  zIndex: 1,
                },
                asset: {
                  kind: "Image",
                  use: "Background",
                  url: val[4].bg,
                },
                startTime: { timeframeId: "scene_5" },
                endTime: { timeframeId: "scene_5" },
              },


              scene_6_spokesperson_asset: {
                id: "scene_6_spokesperson_asset",
                draft: true,
                style: {
                  position: "absolute",
                  zIndex: 2,
                  bottom: "0em",
                  objectFit: "cover",
                  height: "37.5em",
                  width: "66.66666666666667em",
                  left: "16.666666666666664em",
                },
                asset: {
                  kind: "Spokesperson",
                  spokespersonVideo: {
                    model: "danielle_pettee_look_2_nt_aug_2022",
                    voiceId: "7bc739a4-7abc-46db-bc75-e24b6f899fa9__005",
                    langugae: "en-US",
                    output_params: {
                      video: {
                        crop: { preset: "MS" },
                        resolution: { height: 720, width: 1280 },
                        background: { alpha: 0 },
                      },
                    },
                    gender: "female",
                    transcript: `<speak>${val[5].trans}</speak>`,
                    transcript_type: "ssml_limited",
                  },
                },
                startTime: { timeframeId: "scene_6" },
                endTime: { timeframeId: "scene_6" },
              },
              scene_6_background_image: {
                id: "scene_6_background_image",
                style: {
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  zIndex: 1,
                },
                asset: {
                  kind: "Image",
                  use: "Background",
                  url: val[5].bg,
                },
                startTime: { timeframeId: "scene_6" },
                endTime: { timeframeId: "scene_6" },
              },
            },
            timeline: [
              {
                draft: true,
                id: "scene_1",
                type: "clock",
              },
              {
                draft: true,
                id: "scene_2",
                type: "clock",
              },
              {
                draft: true,
                id: "scene_3",
                type: "clock",
              },
              {
                draft: true,
                id: "scene_4",
                type: "clock",
              },
              {
                draft: true,
                id: "scene_5",
                type: "clock",
              },
              {
                draft: true,
                id: 'scene_6',
                type: 'clock'
              }
            ],
            video_dimension: { height: 1080, width: 1920 },
            id: "video_data",
            title: "16:9 Widescreen Blank Canvas",
            thumbnailUrl:
              "https://rephrase-assets.s3.ap-south-1.amazonaws.com/template_thumbnails/cold_reachout_1.png",
          },
        },
        {
          authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkhNcHdjdFl4YWlRdWg4Y0M0ejN0UCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucmVwaHJhc2UuYWkvIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTE0NDg1NTk0ODAxODg2NTE1NTYiLCJhdWQiOlsiaHR0cHM6Ly9kaXkucmVwaHJhc2UuYWkvYXV0aDAiLCJodHRwczovL3JlcGhyYXNlYWktcHJvZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjc5NzU5OTk2LCJleHAiOjE2Nzk4NDYzOTYsImF6cCI6IjNLVTVqdkVxV0pCQ1VLblBYMjZvbmFTUHkzakozMEo0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSByZWFkOnJlcGhyYXNlLmFpIGFsbDpkaXkgcmVhZDpyZXBocmFzZS5haSJ9.cFgZBDMhC4XPNWlB63A6cu1k1kkBisoMBeSZj6GD6Ds6alojn2N2RxFdzyME91cs_z-kAD-yXAE6blKxK90ANSzti7Plm12wx_ihLPM3LPdv6P6lUNe1KSYlAeEi4UbVGCgoSokhk_gmJ7mAEHF9zIJtGS_dn8PvMUq7z2pec-w5_IWHFBpTqBYiDoJh5OC2d_Ybg9jrCos0SaK6P0n1ncZMXGt2kyYuSI7WAEh20KRthfKSq7j-vSprsh9vp8oJ-0JtNd0rKbh77qyMuCM74IxiMPz8iUBHMO5HEemDYIWlE_aKyKoVRHMkkghQ1umLMhkN1ul1rIeSABHQfISzxw",
        }
      )
      .then(({ data }) => console.log(data))
      .catch((err) => console.error(err));
  } catch (error) {
    throw new Error(error);
  }
};
const pdfRead = "./demo.pdf";
getPDF(pdfRead);
