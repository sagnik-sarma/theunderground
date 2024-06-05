import { defineField } from "sanity";
import {BiUser} from 'react-icons/bi';

const profile = {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    icon: BiUser,
    fields: [
        defineField({
            name: 'firstName',
            title: 'First Name',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'openingMove',
            title: 'Opening Move',
            type: 'string',
            validation: (rule) => rule.required().min(40).max(50)
        }),
        defineField({
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            description: 'Upload a profile picture',
            options: {hotspot: true},
            fields: [
                {
                    name:'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ],
            validation: (rule) => rule.required()
        }),
        {
            name: "shortBio",
            title: "Short Bio",
            type: "text",
            rows: 4,
          },
          {
            name: "email",
            title: "Email Address",
            type: "string",
          },
          {
            name: "location",
            title: "Location",
            type: "string",
          },
          {
            name: "fullBio",
            title: "Full Bio",
            type: "array",
            of: [{ type: "block" }],
          },
          {
            name: "resumeURL",
            title: "Upload Resume",
            type: "file",
          },
          {
            name: "socialLinks",
            title: "Social Links",
            type: "object",
            description: "Add your social media links:",
            fields: [
              {
                name: "github",
                title: "Github URL",
                type: "url",
                initialValue: "https://github.com/",
              },
              {
                name: "linkedin",
                title: "Linkedin URL",
                type: "url",
                initialValue: "https://linkedin.com/in/",
              },
              {
                name: "instagram",
                title: "Instagram URL",
                type: "url",
                initialValue: "https://instagram.com/",
              },
              {
                name: "twitch",
                title: "Twitch URL",
                type: "url",
                initialValue: "https://twitch.com/",
              },
            ],
            options: {
              collapsed: false,
              collapsible: true,
              columns: 2,
            },
          },
          {
            name: "skills",
            title: "Skills",
            type: "array",
            description: "Add a list of skills",
            of: [{ type: "string" }],
          },
    ]
};

export default profile