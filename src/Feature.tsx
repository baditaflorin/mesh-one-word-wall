import { useState } from "react";
import { useSharedResponses } from "@baditaflorin/mesh-common";
import type { MeshConfig, YRoom } from "@baditaflorin/mesh-common";

type Props = { room: YRoom | null; config: MeshConfig };
export function Feature({ room, config }: Props) {
  const wall = useSharedResponses(room, "one-word-wall");
  const [word, setWord] = useState("");
  const submit = () => {
    if (wall.submit(word)) setWord("");
  };
  return (
    <main className="feature-placeholder">
      <h1>{config.appName}</h1>
      <p>{config.description}</p>
      <label>
        Your word{" "}
        <input
          value={word}
          maxLength={40}
          onChange={(event) => setWord(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") submit();
          }}
        />
      </label>
      <button type="button" onClick={submit}>
        Share word
      </button>
      <section aria-live="polite" aria-label="Shared wall">
        <h2>
          {wall.responses.length} response{wall.responses.length === 1 ? "" : "s"}
        </h2>
        <ul>
          {wall.responses.map((response) => (
            <li key={response.peerId}>
              <strong>{response.text}</strong> <span>from {response.peerId}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
