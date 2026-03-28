"use client";

import Image from "next/image";
import Link from "next/link";
import CheckIcon from "@/assets/icons/check.svg";
import { useState } from "react";
import { WhiteOval } from "@/share/WhiteOval";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactSchema } from "./schemas/contactUsSchema";
import { postForm } from "@/lib/postForm";

export const SectionForm = () => {
  const textStyles =
    "font-light font-Poppins leading-[130%] text-center tracking-[0.38px] text-[#4B4B4B]";
  return (
    <section className="max-w-[668px] w-full mx-auto">
      <div className="mt-[50px] lg:mt-[130px] flex flex-col items-center justify-center">
        <WhiteOval />
        <h1 className="mt-[15px] text-[30px] lg:text-[45px] font-light font-Newsreader leading-[120%] tracking-[0.38px] text-black">
          Let&apos;s Connect
        </h1>
        <p className={`mt-[15px] text-[14px] lg:text-[16px] ${textStyles}`}>
          Every wedding tells a unique story, and I would love to hear about
          yours. Whether you&apos;re planning an intimate celebration or a
          destination wedding, feel free to share the details of your special
          day.
        </p>
        <Link
          href="mailto:nikolay.lazarev@gmail.com"
          className={`relative inline-block mt-[15px] text-[14px] ${textStyles} 
          after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:bg-current 
          after:transition-[width] after:duration-300 after:ease-out after:w-0 hover:after:w-full`}
        >
          nikolay.lazarev@gmail.com
        </Link>
      </div>

      <div className="mt-[50px] px-[16px] lg:px-[30px] py-[34px] bg-[#F5F5F4]">
        <Form />
      </div>
    </section>
  );
};

type SubmitStatus = "idle" | "loading" | "success";

const Form = () => {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      names: "",
      email: "",
      phone: "+",
      location: "",
      weddingDate: "",
      weddingVenue: "",
      photographer: "",
      message: "",
      howFound: "",
      agreeToPrivacy: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    try {
      await postForm(data);
      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 2500);
    } catch (e) {
      setSubmitStatus("idle");
      console.error(
        e instanceof Error
          ? e.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[15px]"
      autoComplete="off"
    >
      <Input
        label="Names"
        type="text"
        required
        placeholder="Your names (e.g. Emily & Daniel)"
        error={errors.names?.message}
        {...register("names")}
      />
      <Input
        label="Email"
        type="email"
        required
        placeholder="your@email.com"
        error={errors.email?.message}
        {...register("email")}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <Input
            label="Phone"
            type="tel"
            required
            placeholder="+1234567890"
            error={errors.phone?.message}
            {...field}
            onChange={(e) => {
              let v = e.target.value.replace(/[^\d+]/g, "");
              if (!v.startsWith("+")) v = v ? `+${v}` : "+";
              field.onChange(v);
            }}
          />
        )}
      />
      <Input
        label="Where are you based?"
        type="text"
        placeholder="City / Country"
        error={errors.location?.message}
        {...register("location")}
      />
      <Input
        label="Wedding date"
        type="text"
        required
        placeholder="Your wedding date"
        error={errors.weddingDate?.message}
        {...register("weddingDate")}
      />
      <Input
        label="Wedding venue"
        type="text"
        required
        placeholder="Venue name or wedding location"
        error={errors.weddingVenue?.message}
        {...register("weddingVenue")}
      />
      <Input
        label="Who is your photographer?"
        type="text"
        placeholder="Photographer name"
        error={errors.photographer?.message}
        {...register("photographer")}
      />
      <Input
        label="Tell me about your wedding"
        type="textarea"
        required
        placeholder="Share a few details about your wedding plans, location, or vision for your film"
        height="100px"
        error={errors.message?.message}
        {...register("message")}
      />
      <Input
        label="How did you find me?"
        type="text"
        placeholder="Instagram / Google / Referral / Wedding planner"
        error={errors.howFound?.message}
        {...register("howFound")}
      />

      <Controller
        name="agreeToPrivacy"
        control={control}
        render={({ field }) => (
          <Checkbox
            label="I agree to the processing of my personal data and understand it will be used only to respond to my inquiry."
            checked={field.value}
            onChange={field.onChange}
            error={errors.agreeToPrivacy?.message}
          />
        )}
      />

      <motion.button
        type="submit"
        disabled={submitStatus === "loading" || submitStatus === "success"}
        className="mt-[35px] w-full h-[40px] bg-[#1E1E1E] text-white text-[14px] font-medium font-Poppins leading-[100%] cursor-pointer flex items-center justify-center gap-[8px] disabled:cursor-not-allowed disabled:opacity-90"
        whileHover={
          submitStatus === "idle"
            ? { scale: 1.01, backgroundColor: "#2d2d2d" }
            : undefined
        }
        whileTap={submitStatus === "idle" ? { scale: 0.98 } : undefined}
        transition={{ type: "spring", stiffness: 800, damping: 50 }}
      >
        <AnimatePresence mode="wait">
          {submitStatus === "idle" && (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Send Inquiry
            </motion.span>
          )}
          {submitStatus === "loading" && (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-[8px]"
            >
              <span className="h-[14px] w-[14px] shrink-0 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Sending...
            </motion.span>
          )}
          {submitStatus === "success" && (
            <motion.span
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-[8px]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Sent!
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
};

const inputBaseClassName =
  "w-full min-h-[40px] bg-white border p-[15px] text-[14px] font-normal font-Poppins leading-[130%] tracking-[0.38px] text-black placeholder:text-[#717680] focus:outline-none";
const inputNormalClassName = "border-black/50 focus:border-black";
const inputErrorClassName = "border-red-500 focus:border-red-600";

const Input = ({
  label,
  type,
  required,
  placeholder,
  height = "40px",
  error,
  ...props
}: {
  label: string;
  type: string;
  required?: boolean;
  placeholder: string;
  height?: string;
  error?: string;
} & React.ComponentPropsWithoutRef<"input"> &
  React.ComponentPropsWithoutRef<"textarea">) => {
  const style = { height };
  const isTextarea = type === "textarea";
  const hasError = Boolean(error);
  const inputClassName = `${inputBaseClassName} ${hasError ? inputErrorClassName : inputNormalClassName}`;

  return (
    <label className="flex flex-col gap-[7px]">
      <span className="text-[14px] font-medium font-Poppins leading-[130%] tracking-[0.38px] text-black">
        {label} {required && <span>*</span>}
      </span>
      {isTextarea ? (
        <textarea
          className={`${inputClassName} resize-none`}
          style={style}
          placeholder={placeholder}
          {...(props as React.ComponentPropsWithoutRef<"textarea">)}
          autoComplete="off"
        />
      ) : (
        <input
          type={type}
          className={inputClassName}
          style={style}
          placeholder={placeholder}
          {...(props as React.ComponentPropsWithoutRef<"input">)}
          autoComplete="off"
        />
      )}
      {error && (
        <span className="text-[12px] font-normal font-Poppins text-red-600 leading-[130%]">
          {error}
        </span>
      )}
    </label>
  );
};

const Checkbox = ({
  label,
  checked,
  onChange,
  error,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
}) => {
  return (
    <label className="flex flex-col gap-[7px]">
      <div className="flex items-start gap-[7px] cursor-pointer">
        <span className="relative inline-flex w-[16px] h-[16px] shrink-0 mt-0.5">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
          />
          <span
            className={`absolute inset-0 w-[16px] h-[16px] border flex items-center justify-center ${
              error ? "border-red-500" : "border-[#4B4B4B]"
            } peer-checked:bg-[#F7F1EE]`}
          />
          <span className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none">
            <Image src={CheckIcon} alt="check" width={10} height={10} />
          </span>
        </span>
        <span className="text-[14px] font-medium font-Poppins leading-[130%] tracking-[0.38px] text-black">
          {label}
        </span>
      </div>
      {error && (
        <span className="text-[12px] font-normal font-Poppins text-red-600 leading-[130%]">
          {error}
        </span>
      )}
    </label>
  );
};
