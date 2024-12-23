"use client";

import React, { useState, ChangeEvent } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import TicketComponent from "@/component/ticketComponent";
import Picture from "@/component/svgs/picture";
import { Button } from "@/component/button";
import ArrowRight from "@/component/svgs/arrowRight";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { sponsorTicketAction } from "@/mainStore/reduxSlices/sponsorticketdetails";
export default function Page() {
  const dispatch = useDispatch();
  const ticketState = useSelector((state: any) => state.sponsorTicketDetail);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { publicKey } = useWallet();
  const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;

  const {
    KeyMessage,
    ticketDescription,
    category,
    amount,
    image,
    imageUrl,
    location,
    date,
    industry
  } = ticketState;

  console.log(imageUrl);
  
  const CustomOutlinedInput = styled(OutlinedInput)(() => ({
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: 16,
      borderColor: "#4B5768",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#00D300",
    },
    "& .MuiOutlinedInput-input": {
      color: "#E0FFE0",
    },
  }));

  const CustomMenuProps = {
    PaperProps: {
      sx: {
        backgroundColor: "black",
        borderRadius: "8px",
      },
    },
  };

  const CustomInputLabel = styled(InputLabel)(() => ({
    fontSize: "1rem",
    color: "#64748B",
    "&.Mui-focused": {
      color: "#64748B",
      fontSize: "1rem",
      transform: "translate(14px, -6px) scale(0.75)",
      padding: "0rem",
    },
  }));

  const getImageDataUrl = async (file: any) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        `${BACKEND_API}api/v1/event/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const results = await response.json();
      // console.log(results, "this is the results i am looking for");
      if (results.success) {
        const { imageUrl } = results;
        dispatch(sponsorTicketAction.updateImageUrl(imageUrl));
        console.log(imageUrl, "get this shit");
      }
    } catch (error) {
      console.log("Error uploading image:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    switch (id) {
      case "KeyMessage":
        dispatch(sponsorTicketAction.updateTicketName(value));
        break;
      case "ticketDescription":
        dispatch(sponsorTicketAction.updateTicketDescription(value));
        break;
      case "amount":
        dispatch(sponsorTicketAction.updateAmount(value));
        break;
        case "Industry/Niche":
        dispatch(sponsorTicketAction.updateIndustry(value));
        break;
      case "location":
        dispatch(sponsorTicketAction.updateLocation(value));
        break;
      default:
        break;
    }
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(sponsorTicketAction.updateDate(e.target.value));
  };

  const handleSelectChange = (e: any) => {
    dispatch(sponsorTicketAction.updateCategory(e.target.value));
  };

  const handleCoverImageChange = async(e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const files = e.target.files;

    if (files && files[0]) {
      const file = files[0];
      const { name } = file;

      reader.onload = (event) => {
        const dataURL = event?.target?.result as string;
        dispatch(
          sponsorTicketAction.updateImage({ image: dataURL, imageName: name })
        );
      };

      reader.readAsDataURL(file);
      await getImageDataUrl(file)
    } else {
      dispatch(sponsorTicketAction.updateImage({ image: "", imageName: "" }));
    }
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    router.push("/sponsorsDashboard/createad/ad-preview");
    setIsLoading(false);
  };

  return (
    <div>
      <form className="px-[32px] w-full" onSubmit={handleFormSubmit}>
        <div className="w-full flex gap-[48px]">
          <div className="w-1/2 flex flex-col gap-y-[32px]">
            <Box>
              <TextField
                id="KeyMessage"
                label="Key Message"
                variant="outlined"
                fullWidth
                value={KeyMessage}
                onChange={handleInputChange}
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
            <Box>
              <TextField
                id="ticketDescription"
                label="Ad Campaign Goals"
                multiline
                rows={4}
                fullWidth
                value={ticketDescription}
                onChange={handleInputChange}
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
            <Box>
              <FormControl fullWidth>
                <CustomInputLabel id="Select Gender">
                  Select Gender
                </CustomInputLabel>
                <Select
                  labelId="Select Gender"
                  id="category"
                  value={category}
                  input={<CustomOutlinedInput />}
                  onChange={handleSelectChange}
                  MenuProps={CustomMenuProps}
                >
                  <MenuItem value={"Male"}>
                    <p className="text-[#E0FFE0]"> 👨 Male</p>
                  </MenuItem>
                  <MenuItem value={" Female"}>
                    <p className="text-[#E0FFE0]">👩 Female</p>
                  </MenuItem>
                  <MenuItem value={"Non-binary"}>
                    <p className="text-[#E0FFE0]">🌐 Non-binary</p>
                  </MenuItem>
                  <MenuItem value={"All Genders"}>
                    <p className="text-[#E0FFE0]">👥 All Genders</p>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <TextField
                id="amount"
                label="Budget and Ad Spend(SOL)"
                variant="outlined"
                fullWidth
                value={amount}
                onChange={handleInputChange}
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
            <Box>
              <TextField
                id="Industry/Niche"
                label="Industry/Niche"
                variant="outlined"
                fullWidth
                value={industry}
                onChange={handleInputChange}
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
            <Box>
              <TextField
                id="location"
                label="Location"
                variant="outlined"
                fullWidth
                value={location}
                onChange={handleInputChange}
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
            <Box>
              <input
                type="date"
                placeholder="Date"
                value={date}
                onChange={handleDateChange}
                className="bg-[#191d2380] text-[#E0FFE0] mt-1 p-4 block w-full border border-[#4B5768] rounded-[12px] shadow-sm focus:outline-none focus:ring-[#00D300] focus:border-[#00D300] sm:text-sm"
              />
            </Box>
          </div>
          <div className="w-1/2 flex flex-col gap-y-[32px]">
            <TicketComponent
              id="coverImage"
              onChange={handleCoverImageChange}
              image={image}
              first="Ticket Image"
              second="Drag and drop your image here to upload"
              third="Supports JPG, JPEG, PNG"
              fourth="Max. upload size 2MB"
              labelButton="Upload"
              icon={<Picture />}
            />
          </div>
        </div>
        <div className="flex items-end justify-end px-[24px] pt-[24px] pb-[32px] gap-[16px]">
          <Button
            rightIcon={<ArrowRight />}
            label="Next"
            fit
            loading={isLoading}
            customClassName="font-open-sas text-body-s text-fontgreenishColor"
            size="smaller"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
