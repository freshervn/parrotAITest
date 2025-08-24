"use client";

interface FormState {
  score: number;
  time: number;
}
import { useActionState, useState } from "react";
import Congratulation from "./components/Congratulation";
import ScoreBoard from "./components/ScoreBoard";

export default function Home() {
  const [scoreBoard, setScoreBoard] = useState<
    { score: number; time: number }[]
  >([]);
  function handleSubmit(_previousState: FormState, formData: FormData) {
    setScoreBoard((prev) => [
      ...(prev || []),
      {
        score: formData.get("score") ? Number(formData.get("score")) : 0,
        time: formData.get("time") ? Number(formData.get("time")) : 0,
      },
    ]);
    return {
      score: formData.get("score") ? Number(formData.get("score")) : 0,
      time: formData.get("time") ? Number(formData.get("time")) : 0,
    };
  }
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    handleSubmit,
    {
      score: 0,
      time: 0,
    }
  );
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-4">
      <div className="flex w-full mx-auto justify-center">
        {/* input */}
        <aside className="flex flex-col gap-4 justify-center w-1/2 max-w-[500px] p-4">
          <div className="h-[100px]">
            {!isPending && state.score > 0 && (
              <>
                <Congratulation score={state.score} />
                <p>Điểm của bạn là: {state.score}</p>
              </>
            )}
          </div>
          <form action={formAction} className="flex flex-col gap-4">
            <label htmlFor="">
              <span>Điểm</span>
            </label>
            <input
              name="score"
              type="number"
              min={1}
              max={100}
              step={1}
              className="border rounded px-3 py-2 text-center w-full"
            />
            <label htmlFor="">
              <span>Thời gian</span>
            </label>
            <input
              name="time"
              type="number"
              min={1}
              step={1}
              className="border rounded px-3 py-2 text-center w-full"
            />
            <button
              className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200
              ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isPending}
            >
              Gửi
            </button>
          </form>
        </aside>
        {/* score board */}
        <aside className="w-1/2 max-w-[500px] max-h-[500px] overflow-auto ">
          <ScoreBoard scores={scoreBoard} />
        </aside>
      </div>
    </div>
  );
}
