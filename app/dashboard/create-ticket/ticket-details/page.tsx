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
import { ticketAction } from "@/mainStore/reduxSlices/ticketDetailSlice";
import { useRouter } from "next/navigation";


export default function Page() {
  const dispatch = useDispatch();
  const ticketState = useSelector((state: any) => state.ticketDetail);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  
  const {
    ticketName,
    ticketDescription,
    category,
    amount,
    quantity,
    image,
    location,
    date,
  } = ticketState;

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    switch (id) {
      case "ticketName":
        dispatch(ticketAction.updateTicketName(value));
        break;
      case "ticketDescription":
        dispatch(ticketAction.updateTicketDescription(value));
        break;
      case "category":
        dispatch(ticketAction.updateCategory(value));
        break;
      case "amount":
        dispatch(ticketAction.updateAmount(value));
        break;
      case "quantity":
        dispatch(ticketAction.updateQuantity(value));
        break;
      case "location":
        dispatch(ticketAction.updateLocation(value));
        break;
      default:
        break;
    }
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(ticketAction.updateDate(e.target.value));
  };

  const handleSelectChange = (e:any) => {
    dispatch(
      ticketAction.updateCategory(e.target.value)
    );
  };
  

  const handleCoverImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const files = e.target.files;

    if (files && files[0]) {
      const file = files[0];
      const { name } = file;

      reader.onload = (event) => {
        const dataURL = event?.target?.result as string;
        dispatch(ticketAction.updateImage({ image: dataURL, imageName: name }));
      };

      reader.readAsDataURL(file);
    } else {
      dispatch(ticketAction.updateImage({ image: "", imageName: "" }));
    }
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    router.push("/dashboard/create-ticket/ticket-preview");
    setIsLoading(false);
  };

  return (
    <div>
      <form className="px-[32px] w-full" onSubmit={handleFormSubmit}>
        <div className="w-full flex gap-[48px]">
          <div className="w-1/2 flex flex-col gap-y-[32px]">
            <Box>
              <TextField
                id="ticketName"
                label="Ticket Name"
                variant="outlined"
                fullWidth
                value={ticketName}
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
                label="Ticket Description"
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
                <CustomInputLabel id="Select Category">
                  Select Category
                </CustomInputLabel>
                <Select
                  labelId="Select Category"
                  id="category"
                  value={category}
                  input={<CustomOutlinedInput />}
                  onChange={handleSelectChange}
                  MenuProps={CustomMenuProps}
                >
                  <MenuItem value={"Parties & Socials"}>
                    <p className="text-[#E0FFE0]"> 🎉 Parties & Socials</p>
                  </MenuItem>
                  <MenuItem value={" Food & Drink"}>
                    <p className="text-[#E0FFE0]"> 🍴 Food & Drink</p>
                  </MenuItem>
                  <MenuItem value={"Charity & Causes"}>
                    <p className="text-[#E0FFE0]"> 🌟 Charity & Causes</p>
                  </MenuItem>
                  <MenuItem value={"Tech & Innovation"}>
                    <p className="text-[#E0FFE0]"> 💻 Tech & Innovation</p>
                  </MenuItem>
                  <MenuItem value={"Education & Workshops"}>
                    <p className="text-[#E0FFE0]"> 🎓 Education & Workshops</p>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <TextField
                id="amount"
                label="Enter Amount (SOL)"
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
                id="quantity"
                label="Quantity"
                variant="outlined"
                fullWidth
                value={quantity}
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
