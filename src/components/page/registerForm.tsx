"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CCountrySelectInput from "../form/c-country-select-input"
import { CBaseSelect } from "../form/c-base-select"
import FormSectionTitle from "../form/form-section-title"
import CPhoneNumberInput from "../form/c-phone-number-input"
import { Checkbox } from "../ui/checkbox"
import Link from "next/link"
import { useTranslations } from "next-intl"
import CImageDropZone from "../custom/c-image-dropzone"

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];
// const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];

const formSchema = z.object({
    country: z.string().min(2, {
        message: "Country must be at least 2 characters.",
    }),
    cityVillage: z.string().min(2, {
        message: "City & Village must be at least 2 characters.",
    }),
    streetRoad: z.string().min(2, {
        message: "Street Road must be at least 2 characters.",
    }),
    no: z.string().min(2, {
        message: "No must be at least 2 characters.",
    }),
    shopName: z.string().min(2, {
        message: "Shop Name must be at least 2 characters.",
    }),
    ownerName: z.string().min(2, {
        message: "Owner Name must be at least 2 characters.",
    }),
    phoneNumber: z.string().min(2, {
        message: "Phone Number must be at least 2 characters.",
    }),
    division: z.string().min(2, {
        message: "Division must be at least 2 characters.",
    }),
    township: z.string().min(2, {
        message: "township must be at least 2 characters.",
    }),
    applicant: z.string().min(2, {
        message: "applicant must be at least 2 characters.",
    }),
    applicantName: z.string().min(2, {
        message: "applicant must be at least 2 characters.",
    }),
    policyAgreement: z.boolean(),
    image: z
        .any()
        .refine((files) => {
            return files?.[0]?.size <= MAX_FILE_SIZE;
        }, `Max image size is 5MB.`)
        .refine(
            (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
})

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

export function RegisterForm() {
    const t = useTranslations('Register');
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            country: "",
            cityVillage: "",
            streetRoad: "",
            no: "",
            shopName: "",
            ownerName: "",
            phoneNumber: "",
            division: "",
            township: "",
            applicant: "",
            applicantName: "",
            policyAgreement: false,
            image: ""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div>
            <h1 className="text-primary text-center font-bold text-lg mb-[30px] lg:text-3xl">{t('title')}</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-[30px] lg:space-y-0 lg:mt-[30px] grid grid-cols-1 lg:grid-cols-2 lg:gap-[30px]">
                        <div>
                            <FormSectionTitle>Shop Info :</FormSectionTitle>
                            <div className="space-y-[10px] lg:space-y-[20px]">
                                <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Country</FormLabel>
                                            <FormControl>
                                                <CCountrySelectInput placeholder="Select Country" onValueChange={field.onChange} defaultValue={field.value} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="division"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Divisions</FormLabel>
                                            <FormControl>
                                                <CBaseSelect items={divisions} placeholder="Select Your Division" onValueChange={field.onChange} defaultValue={field.value} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="township"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Township</FormLabel>
                                            <FormControl>
                                                <CBaseSelect items={townships} placeholder="Select Your Township" onValueChange={field.onChange} defaultValue={field.value} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cityVillage"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>City & Village</FormLabel>
                                            <FormControl>
                                                <Input className="text-sm" placeholder="Enter your City & Village" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="streetRoad"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Street / Road</FormLabel>
                                            <FormControl>
                                                <Input className="text-sm" placeholder="Enter your Street / Road" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="no"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>No.</FormLabel>
                                            <FormControl>
                                                <Input className="text-sm" placeholder="Enter your City & Village" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="shopName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Shop Name</FormLabel>
                                            <FormControl>
                                                <Input className="text-sm" placeholder="Enter your Shop Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="image"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Image</FormLabel>
                                            <FormControl>
                                                {/* <CPhoneNumberInput placeholder="Enter your phone number" onValueChange={field.onChange} defaultValue={field.value} /> */}
                                                <div className="w-auto min-h-[200px] max-h-[300px] border rounded flex justify-center items-center">
                                                    <CImageDropZone onValueChange={field.onChange} />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>
                        </div>
                        <div className="space-y-[30px]">
                            <div>
                                <FormSectionTitle>Personal Info :</FormSectionTitle>
                                <div className="space-y-[10px] lg:space-y-[20px]">
                                    <FormField
                                        control={form.control}
                                        name="ownerName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Owner Name</FormLabel>
                                                <FormControl>
                                                    <Input className="text-sm" placeholder="Enter your Owner Name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phoneNumber"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone Number</FormLabel>
                                                <FormControl>
                                                    <CPhoneNumberInput placeholder="Enter your phone number" onValueChange={field.onChange} defaultValue={field.value} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div>
                                <FormSectionTitle>Other Info :</FormSectionTitle>
                                <div className="space-y-[10px] lg:space-y-[20px]">
                                    <FormField
                                        control={form.control}
                                        name="applicant"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Applicant</FormLabel>
                                                <FormControl>
                                                    <CBaseSelect items={applicants} placeholder="Select Your Applicant" onValueChange={field.onChange} defaultValue={field.value} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="applicantName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Applicant Name</FormLabel>
                                                <FormControl>
                                                    <Input className="text-sm" placeholder="Enter Applicant Name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-[10px] lg:space-y-[20px]">
                        <FormField
                            control={form.control}
                            name="policyAgreement"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            I agree to the <Link className="text-primary underline" href="www.google.com">Terms and Conditions</Link>, <Link className="text-primary underline" href="www.google.com">Privacy Policy</Link>, <Link className="text-primary underline" href="www.google.com">License Agreement</Link>
                                        </FormLabel>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <Button className="w-full lg:w-[500px] lg:mx-auto hover:bg-c-hover" type="submit">Register</Button>
                    </div>
                </form>
            </Form>
            {/* <div>
                {JSON.stringify(form.getValues())}
            </div> */}
        </div>
    )
}
