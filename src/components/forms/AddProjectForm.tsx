"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "../ui/textarea"
// constants
import { TECHSTACKITEMS } from "../../helpers/constants"
// api
import type { NewPortfolioType } from "@/types/PortfolioTypes"
// hooks
import {useAddPortfolio} from "../../hooks/useAddPortfolio"
 
const formSchema = z.object({
  projectName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  projectDesc: z.string().min(1, {
    message: "Please enter description.",
  }),
  projectLink: z.string().optional(),
  projectLinkText: z.string(),
  techStackItems: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})
.refine((data) => {
    // Only validate projectLinkText if projectLink is not empty
    if (!data.projectLink) return true
    return data.projectLinkText.length > 0
  }, {
    path: ["projectLinkText"],
    message: "Please enter link text.",
  })

function AddProjectForm() {

    const { mutate: addPortfolio, isPending, error } = useAddPortfolio();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            projectName: "",
            projectDesc: "",
            projectLink: "",
            projectLinkText: "",
            techStackItems: []
        },
    })

    // input watchers
    const projectLinkValue = form.watch("projectLink")

    // handle form submit
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const data: NewPortfolioType = {
            name: values.projectName,
            description: values.projectDesc,
            link: values.projectLink,
            techStack: values.techStackItems.map(
                (id) => TECHSTACKITEMS.find((item) => item.id === id)?.label || id
            )
        }

        if (values.projectLinkText) data.linkText = values.projectLinkText

        addPortfolio(data, {
            onSuccess: (data) => {
                console.log(data)
                form.reset()
            },
            onError: (err) => {
                console.log('onError', err)
            },
            onSettled: () => {
                form.reset()
            }
        })
    }

    return (
        <div className="w-full max-w-96 m-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="projectName"
                        render={({ field }) => (
                            <div className="mb-8">
                                <FormItem>
                                    <FormLabel>Project name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Project name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </div>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="projectDesc"
                        render={({ field }) => (
                            <div className="mb-8">
                                <FormItem>
                                    <FormLabel>Project description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Project description." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </div>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="projectLink"
                        render={({ field }) => (
                            <div className="mb-8">
                                <FormItem>
                                    <FormLabel>Project link</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Project link" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </div>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="projectLinkText"
                        disabled={!projectLinkValue}
                        render={({ field }) => (
                            <div className="mb-8">
                                <FormItem>
                                    <FormLabel>Project link text</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Project link text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </div>
                        )}
                    />
                    <div className="mb-8">
                        <FormLabel className="mb-2">Tech stack</FormLabel>
                        <div className="flex gap-2 flex-wrap">
                            {TECHSTACKITEMS.map((item) => (
                                <FormField
                                    key={item.id}
                                    control={form.control}
                                    name="techStackItems"
                                    render={({ field }) => {
                                    return (
                                        <FormItem
                                            className="flex flex-row items-center gap-2"
                                        >
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes(item.id)}
                                                    onCheckedChange={(checked) => {
                                                    return checked
                                                        ? field.onChange([...field.value, item.id])
                                                        : field.onChange(
                                                            field.value?.filter(
                                                                (value) => value !== item.id
                                                            )
                                                        )
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="text-sm font-normal">
                                                {item.label}
                                            </FormLabel>
                                        </FormItem>
                                    )
                                }}
                                />
                            ))}
                        </div>
                    </div>
                    <Button type="submit" className="w-full" disabled={isPending}>Submit</Button>
                    {error ? <p style={{ color: 'red' }}>{(error as Error).message}</p> : null}
                </form>
            </Form>
        </div>
    )
}

export default AddProjectForm