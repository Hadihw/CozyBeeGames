"use client";

import { useEffect } from "react";

export default function LemonCake() {
  useEffect(() => {
    console.log("LemonCake");
  }, []);
}
