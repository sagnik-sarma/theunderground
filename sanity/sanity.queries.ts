import { groq } from 'next-sanity';
import client from './sanity.client';

export async function getProfile() {
    return client.fetch(
        groq`*[_type== "profile"] {
        _id,
        firstName,
        lastName,
        openingMove,
        profileImage {alt, "image": asset -> url},
        shortBio,
        location,
        fullBio,
        email,
        "resumeURL": resumeURL.asset->url,
        socialLinks,
        skills
    }`);
}