"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

const ContactForm = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    service: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      Service: value,
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!formData.name.trim() || !formData.email.trim()) {
        toast({
          title: "Error: Something is wrong",
          description: "Please input your name and email to continue",
          variant: "destructive",
        });
        return;
      }
      const form = new FormData();
      const currentDateTime = new Date().toLocaleString();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("address", formData.address);
      form.append("message", formData.message);
      form.append("service", formData.service);
      form.append("DateTime", currentDateTime);

      const response = await fetch("The url must be here", {
        method: "POST",
        body: form,
      });
      if (response?.ok) {
        setSuccess(true);
        setStatus("Success! Your message has been sent.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
          service: "",
        });
      } else {
        setStatus("Error! Unable to send your message.");
      }
    } catch (error) {
      console.error("Data submitting Error", error);
      setStatus("Error! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl md:text-4xl text-hovercolor">
        Let&apos;s work together
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum,
        necessitatibus eos amet minima facere corporis. Aliquid libero illo
        aperiam consequatur commodi earum tenetur
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col  gap-4 ">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <Input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <Textarea
          name="message"
          placeholder="Messge Here"
          rows={5}
          value={formData.message}
          onChange={handleChange}
        />
        <Select onValueChange={handleSelectChange} disabled={loading}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-bodycolor text-white border-hovercolor">
            <SelectGroup>
              <SelectLabel>Select a service</SelectLabel>
              <SelectItem value="Web Development">Web Development</SelectItem>
              <SelectItem value="SEO Management">SEO Management</SelectItem>
              <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
              <SelectItem value="Logo Design">Logo Design</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          disabled={loading}
          type="submit"
          className="w-full py-4 bg-hovercolor/5 text-white/80 border border-hovercolor/20 hover:bg-hovercolor/10 hover:border-hovercolor hover:text-hoverColor hoverEffect"
        >
          {loading ? "Submitting message..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
