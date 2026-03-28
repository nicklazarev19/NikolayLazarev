import { ContactFormData } from "@/features/ContactUs/schemas/contactUsSchema";

export const postForm = async (data: ContactFormData) => {
  const formData = new FormData();
  formData.append("names", data.names);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("location", data.location || "");
  formData.append("weddingDate", data.weddingDate);
  formData.append("weddingVenue", data.weddingVenue);
  formData.append("photographer", data.photographer || "");
  formData.append("message", data.message);
  formData.append("howFound", data.howFound || "");
  formData.append("agreeToPrivacy", data.agreeToPrivacy ? "true" : "false");

  const response = await fetch("/api/contact", {
    method: "POST",
    body: formData,
  });

  const body = (await response.json().catch(() => ({}))) as {
    ok?: boolean;
    error?: string;
  };

  if (!response.ok) {
    throw new Error(
      body.error || "Failed to send your message. Please try again.",
    );
  }

  return body;
};
