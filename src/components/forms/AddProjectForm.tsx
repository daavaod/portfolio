"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

const techStackItems = [
  {
    id: "react",
    label: "React",
  },
  {
    id: "html",
    label: "HTML",
  },
  {
    id: "css",
    label: "CSS",
  },
] as const
 
const formSchema = z.object({
  projectName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  techStackItems: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

function AddProjectForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            projectName: "",
            techStackItems: []
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
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
                                    <FormDescription>
                                        Enter project name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            </div>
                        )}
                    />
                    <div className="mb-8">
                        <FormLabel className="mb-2">Tech stack</FormLabel>
                        {techStackItems.map((item) => (
                            <FormField
                                key={item.id}
                                control={form.control}
                                name="techStackItems"
                                render={({ field }) => {
                                return (
                                    <FormItem
                                        key={item.id}
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
                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default AddProjectForm