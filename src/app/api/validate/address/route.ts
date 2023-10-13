import resolveEnvVar from "@/helpers/resolveEnvVar";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const GEO_API_KEY = resolveEnvVar("GEO_API_KEY");
    const { partialAddress } = (await req.json()) as { partialAddress: string };

    var requestOptions = {
      method: "GET",
    };

    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${partialAddress}&apiKey=${GEO_API_KEY}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const json = await response.json();
    return NextResponse.json(json, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" });
  }
}
