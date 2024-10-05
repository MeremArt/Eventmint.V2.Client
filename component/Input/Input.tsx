// components/input/Input.tsx
import React, { ChangeEvent, KeyboardEvent } from "react";
import styles from "./input.module.css";
import SendChat from "../svgs/send-chat";

interface InputProps {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (event: React.FormEvent | React.KeyboardEvent) => void;
}

const Input: React.FC<InputProps> = ({ message, setMessage, sendMessage }) => (
  <form 
  className="flex justify-between items-center self-stretch rounded-[100px] border-[1.5px] border-[#643DFF] bg-[#0D0F11] shadow-[0px_0px_56px_0px_rgba(0,0,0,0.5)]" 
  onSubmit={sendMessage}>
    <input
      type="text"
      className="w-full outline-none bg-[#0D0F11] ml-4 text-[#7e8fa8]"
      placeholder="Type your message"
      value={message}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        setMessage(event.target.value)
      }
      onKeyPress={(event: KeyboardEvent) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button type="button"  onClick={sendMessage}>
      <SendChat/>
    </button>
  </form>
);

export default Input;
