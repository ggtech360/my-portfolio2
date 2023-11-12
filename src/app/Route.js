"use client"
import { useRouter } from "next/router";

export default function Route({path}) {
    const router = useRouter();
    router.push(path);
}

