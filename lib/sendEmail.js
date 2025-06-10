export const sendEmail = async ({ name, email, wpm }) => {
  const payload = {
    service_id: "service_hgnd1bv",
    template_id: "template_3laiq8c",
    user_id: "UfyNsDNPDhoFoCWRP",
    template_params: {
      title: "Typing Record Broken",
      name: name || "Anonymous",
      email: email || "no-reply@example.com",
      message: `🚨 Someone beat Harsha's typing record with ${wpm} WPM!`,
    },
  };

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("EmailJS error:", errorText);
    throw new Error("Failed to send email");
  }

  // Handle plain text "OK" response safely
  const text = await res.text();
  if (text !== "OK") {
    throw new Error("Unexpected response from EmailJS: " + text);
  }

  return { status: "success" };
};
