import resolveEnvVar from "@/helpers/resolveEnvVar";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const GEO_API_KEY = resolveEnvVar("GEO_API_KEY");
    const partialAddress = (await req.json()) as string;
    var requestOptions = {
      method: "GET",
    };

    console.log(GEO_API_KEY);

    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
        partialAddress
      )}&format=json&limit=5&apiKey=${GEO_API_KEY}`,
      requestOptions
    );
    if (response.ok) {
      const json = await response.json();
      return NextResponse.json(json, { status: 200 });
    } else {
      console.error(`Request failed with status: ${response.status}`);
      return NextResponse.json({ message: "Error" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" });
  }
}
