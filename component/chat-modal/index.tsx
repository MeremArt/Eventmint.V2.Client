"use client";
import React, { useState } from "react";
import { Typography } from "../typogrphy";
import Image from "next/image";
import { Box, TextField } from "@mui/material";
import { Button } from "../button";
import Link from "next/link";

function ChatRoom() {
  const [name, setName] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  return (
    <div className="text-white w-full h-full flex items-center justify-center   p-6 flex-col gap-[72px] flex-shrink-0 transition-all duration-300">
      <div className="mx-auto text-center  flex flex-col items-center">
        <div>
          <Image src={"/Bubble.svg"} alt="bubble" height={200} width={200} />
        </div>
        <div>
          <Typography customClassName="text-[33px] leading-[40px] font-medium text-[#E7EAEE] font-Ubuntu">
            Join Event Chatroom
          </Typography>
        </div>
        <div>
          <Typography customClassName="text-[23px] leading-[28px] font-normal text-[#A0ABBB] font-Ubuntu">
            Don’t miss a beat! Be a part of the conversation.
          </Typography>
        </div>
      </div>
      <div className="w-full mx-auto">
        <form
          action=""
          className="mx-auto flex flex-col items-start gap-[48px] w-[636px]"
        >
          <Box sx={{ width: "100%" }}>
            <TextField
              id="name"
              label="name"
              variant="outlined"
              onChange={(event) => setName(event.target.value)}
              fullWidth
              // value={ticketName}
              // onChange={handleInputChange}
              required
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#4B5768",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#4B5768",
                    borderRadius: "16px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#64748B",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#00D300",
                },
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "#00D300",
                },
                "& .MuiOutlinedInput-input": {
                  color: "#E0FFE0",
                },
              }}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <TextField
              id="eventName"
              label="event name"
              variant="outlined"
              onChange={(event) => setRoom(event.target.value)}
              fullWidth
              // value={ticketName}
              // onChange={handleInputChange}
              required
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#4B5768",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#4B5768",
                    borderRadius: "16px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#64748B",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#00D300",
                },
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "#00D300",
                },
                "& .MuiOutlinedInput-input": {
                  color: "#E0FFE0",
                },
              }}
            />
          </Box>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            href={`/chat?name=${name}&room=${room}`}
            className="w-full"
          >
            <Button
              label="join event"
              customClassName="text-body-xxs font-open-sans bg-gradient-to-b-custom rounded-[12px] text-[#003500]"
              size="moreMedium"

              //   onClick={openModal}
            />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ChatRoom;
