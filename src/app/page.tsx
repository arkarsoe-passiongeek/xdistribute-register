import CBaseInput from "@/components/form/c-base-inptut"
import { CBaseSelect } from "@/components/form/c-base-select"
import CCountrySelectInput from "@/components/form/c-country-select-input"
import CPhoneNumberInput from "@/components/form/c-phone-number-input"
import FormSectionTitle from "@/components/form/form-section-title"
import { RegisterForm } from "@/components/page/registerForm"

export default function Home() {
  const divisions = [
    {
      label: 'Division one',
      value: 'division-one'
    }
  ]

  const townships = [
    {
      label: 'Township one',
      value: 'township-one'
    }
  ]

  const applicants = [
    {
      label: 'applicant one',
      value: 'applicant-one'
    }
  ]

  return (
    <div className="container px-[17px] mx-auto">
      <div className="bg-white-1 rounded my-[24px] p-[20px] lg:p-[40px] shadow">
        <h1 className="text-primary text-center font-bold text-lg mb-[30px] lg:text-3xl">Welcome to Xdistribute</h1>
        {/* <div className="mt-[30px] grid grid-cols-2 gap-[30px]">
          <div className="space-y-[30px]">
            <FormSectionTitle>Shop Info :</FormSectionTitle>
            <CCountrySelectInput />
            <CBaseSelect title="Select Your Division" id="division" label="Divison" items={divisions} />
            <CBaseSelect title="Select Your Township" id="township" label="Township" items={townships} />
            <CBaseInput id="city-village" label="City & Village" placeholder="Enter your City & Village" />
            <CBaseInput id="street-road" label="Street/Road" placeholder="Enter your Street/Road" />
            <CBaseInput id="no" label="No." placeholder="Enter your No." />
            <CBaseInput id="shop-name" label="Shop Name" placeholder="Enter your Shop Name" />
          </div>
          <div className="space-y-[30px]">
            <div className="space-y-[30px]">
              <FormSectionTitle>Personal Info :</FormSectionTitle>
              <CBaseInput id="owner-name" label="Owner Name" placeholder="Enter Owner Name" />
              <CPhoneNumberInput />
            </div>
            <div className="space-y-[30px]">
              <FormSectionTitle>Other Info :</FormSectionTitle>
              <CBaseSelect title="Select Applicant" id="applicant" label="Applicant" items={townships} />
            </div>
          </div>
        </div> */}

        <div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
