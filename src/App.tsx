import MainContent from "./components/MainContent";
import Form from "./components/Form";
import Result from "./components/Result";
import ResultEmpty from "./components/ResultEmpty";
import FormHeader from "./components/FormHeader";
import FormContent from "./components/FormContent";
import Amount from "./components/Amount";
import TermAndAmountContainer from "./components/TermAndAmountContainer";
import Rate from "./components/Rate";
import CalculateButton from "./components/CalculateButton";
import Type from "./components/Type";
import Term from "./components/Term";
import EndResult from "./components/EndResult";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";

export type FormInput = {
  amount: number;
  term: number;
  rate: number;
  type: string;
};

function App() {
  const [submit, setSubmit] = useState(false);
  const form = useForm<FormInput>();

  return (
    <FormProvider {...form}>
      <MainContent>
        <Form setSubmit={setSubmit}>
          <FormHeader setSubmit={setSubmit} />
          <FormContent>
            <Amount />
            <TermAndAmountContainer>
              <Term />
              <Rate />
            </TermAndAmountContainer>
            <Type />
            <CalculateButton />
          </FormContent>
        </Form>
        <Result>{submit ? <EndResult /> : <ResultEmpty />}</Result>
      </MainContent>
    </FormProvider>
  );
}

export default App;

// import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";

// type FormValues = {
//   username: string;
//   email: string;
//   channel: string;
// };

// export default function App() {
//   const form = useForm<FormValues>();
//   const { register, control, handleSubmit, formState } = form;
//   const { errors } = formState;

//   function onSubmit(data: FormValues) {
//     console.log(data);
//   }

//   function onError(errors: any) {
//     console.log(errors);
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
//         <div>
//           <label htmlFor="username">UserName</label>
//           <input
//             type="text"
//             id="username"
//             {...register("username", { required: "Username is required" })}
//           />
//         </div>
//         <p>{errors.username?.message}</p>

//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="text"
//             id="email"
//             {...register("email", {
//               pattern: {
//                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                 message: "Invalid Email Format",
//               },
//               validate: {
//                 notAdmin: (fieldValue) => {
//                   return (
//                     fieldValue !== "admin@example.com" ||
//                     "Enter a different email address"
//                   );
//                 },
//                 notBlackListed: (fieldValue) => {
//                   return (
//                     !fieldValue.endsWith("baddomain.com") ||
//                     "This domain is not supported"
//                   );
//                 },
//               },
//             })}
//           />
//         </div>
//         <p>{errors.email?.message}</p>

//         <div>
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             {...register("channel", { required: "Channel is required" })}
//           />
//         </div>
//         <p>{errors.channel?.message}</p>

//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </>
//   );
// }
