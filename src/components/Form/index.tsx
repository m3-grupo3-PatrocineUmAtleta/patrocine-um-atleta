import { SectionForm } from "./styles";

interface iFormProps {
  children: React.ReactNode;
  eventClick: () => void;
  title: string;
}

export const Form = ({ children, eventClick, title }: iFormProps) => {
  return (
    <SectionForm>
      <h1 className="title-2">{title}</h1>
      <form onSubmit={eventClick} noValidate>
        {children}
      </form>
    </SectionForm>
  );
};
