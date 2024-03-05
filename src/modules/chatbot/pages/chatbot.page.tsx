"use client";

import { Input } from "@/components";
import { MemoizedReactMarkdown } from "@/components/markdown";
import { useChat } from "ai/react";
import { MdSend } from "react-icons/md";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
export const ChatbotPage = () => {
  const user = "user";

  const { error, isLoading, input, messages, setInput, handleSubmit } = useChat(
    {
      api: "http://api.kalkuli.com.br:5001/v1/chat/completions",
      body: {
        client_id: "56789",
        chat_id: "1234",
        timestamp: new Date(),
        n_results: 5,
        collection: "kalkuli",
        top_p: 0.9,
        seed: 10,
        temperature: 0.1,
        auto_max_new_tokens: true,
        stream: false,
      },
    }
  );

  return (
    <div className="flex flex-col items-center h-full pb-10">
      {error && <p className="text-red-500">{error.message}</p>}
      {isLoading && <p>Pensando...</p>}

      <div className="flex flex-col flex-grow w-full items-center justify-center">
        {messages?.map((message, index) => {
          if (message.role.toLowerCase() === "assistant") {
            const parseJSON = JSON.parse(message.content);
            const markdown = parseJSON.choices[0].message.content;
            return (
              <div key={index}>
                <MemoizedReactMarkdown
                  components={{
                    p({ children }) {
                      return <p className="my-4 last:mb-0">{children}</p>;
                    },

                    table({ children }) {
                      return (
                        <table className="table-auto divide-y divide-gray-300">
                          {children}
                        </table>
                      );
                    },

                    th({ children }) {
                      return (
                        <th
                          scope="col"
                          className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                        >
                          {children}
                        </th>
                      );
                    },
                    td({ children }) {
                      return (
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {children}
                        </td>
                      );
                    },
                    tbody({ children }) {
                      return (
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {children}
                        </tbody>
                      );
                    },
                  }}
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeKatex, rehypeRaw]}
                >
                  {"Kalkuli: " + markdown.toString()}
                </MemoizedReactMarkdown>
              </div>
            );
          }

          return (
            <div key={index}>
              <p>
                {"Você: "}
                {message.content}
              </p>
            </div>
          );
        })}

        {!error && !messages.length && (
          <>
            <h1 className="text-4xl text-custom-accentGreen font-medium">
              Bem-vindo.
            </h1>
            <p className="text-lg font-medium text-custom-grayFootprint">
              Como posso te auxiliar?
            </p>
          </>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="sticky bottom-0 flex w-full justify-center items-center"
      >
        <Input
          value={input}
          onValueChange={setInput}
          variant="bordered"
          placeholder="Pergunte algo.."
          className="max-w-3xl sticky inset-y-0 min-h-12"
        />

        <button type="submit" className="fixed right-0">
          <MdSend size={24} />
        </button>
      </form>
    </div>
  );
};
