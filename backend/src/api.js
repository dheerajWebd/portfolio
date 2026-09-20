import axios from "axios";

export const api = async () => {
  try {
    const response = await axios.post(
      "https://integrate.api.nvidia.com/v1/chat/completions",
      {
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "What is the meaning of life?",
              },
            ],
          },
        ],
        model: "moonshotai/kimi-k3",
        max_tokens: 16384,
        temperature: 1,
        reasoning_effort: "max",
        seed: 0,
      },
      {
        headers: {
          Authorization:
            "Bearer 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",
          Accept: "application/json",
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

const response = await api();
console.log(response);

/* import axios from 'axios';


const invokeUrl = "https://integrate.api.nvidia.com/v1/chat/completions";
const stream = true;

const headers = {
  "Authorization": "Bearer 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",
  "Accept": stream ? "text/event-stream" : "application/json"
};

async function main() {
  const payload = {"messages":[{"role":"user","content":[{"type":"text","text":"What is in this image?"},{"type":"image_url","image_url":{"url":"https://assets.ngc.nvidia.com/products/api-catalog/phi-3-5-vision/example1b.jpg"}}]}],"model":"moonshotai/kimi-k3","max_tokens":16384,"seed":0,"stream":stream,"temperature":1,"reasoning_effort":"max"};

  const response = await axios.post(invokeUrl, payload, {
    headers: headers,
    responseType: stream ? 'stream' : 'json'
  });

  if (stream) {
    response.data.on('data', (chunk) => {
      console.log(chunk.toString());
    });
  } else {
    console.log(JSON.stringify(response.data));
  }
}

main().catch(error => {
  if (error.response) {
    console.error(`HTTP ${error.response.status}`);
    if (error.response.data?.on) {
      error.response.data.on('data', (chunk) => console.error(chunk.toString()));
    } else {
      console.error(error.response.data);
    }
  } else {
    console.error(error);
  }
});

 */
