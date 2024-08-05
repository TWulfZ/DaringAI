import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import "./Loggin.css";
import daringLogo from "/logo.svg";
import PageTransition from "@routes/PageTransition";
import supabaseClient from "services/supaClient";

const Loggin = () => {
  const navigate = useNavigate();

  supabaseClient.auth.onAuthStateChange(async (event) => {
    if (event == "SIGNED_IN") {
        navigate("/success");
    }
});
  return (
    <PageTransition>
      <div className="flex h-dvh w-full flex-col items-center justify-center">
        <img
          src={daringLogo}
          className="logo drag-none h-26 mb-6"
          alt="DaringAI logo"
        />
        <header className="animate-border w-80 rounded-lg p-4">
          <Auth
            supabaseClient={supabaseClient}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={["github"]}
            localization={{
              variables: {
                
                sign_in: {
                  button_label: "Iniciar Sesion",
                  email_input_placeholder: "Correo Electrónico",
                  email_label: "Tu Correo Electrónico",
                  password_input_placeholder: "Contraseña",
                  password_label: "Contraseña",
                  link_text: "Volver a Iniciar Sesion",
                  loading_button_label: "Iniciando Sesion...",
                  social_provider_text: "Iniciar Sesion con {{provider}}",
                },
                sign_up: {
                  button_label: "Registrarse",
                  email_input_placeholder: "Correo Electrónico",
                  email_label: "Tu Correo Electrónico",
                  password_input_placeholder: "Contraseña",
                  password_label: "Contraseña",
                  link_text: "¿No tengo cuenta? Registrarme",
                  loading_button_label: "Registrando...",
                  social_provider_text: "Registrarse con {{provider}}",
                },
                forgotten_password: {
                  button_label: "Enviar",
                  email_input_placeholder: "Correo Electrônico",
                  email_label: "Tu correo electrónico",
                  loading_button_label: "Enviando...",
                  link_text: "¿Olvide mi contraseña?",
                },
              },
            }}
          />
        </header>
      </div>
    </PageTransition>
  );
};

export default Loggin;
