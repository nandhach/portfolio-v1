import { NextResponse } from "next/server";
import { getProjectsData } from "@/services/projects";

export const dynamic = "force-dynamic";

export const GET = async (req: Request) => {
  try {
    const data = await getProjectsData(
      new URL(req.url).searchParams.get("locale") || "en",
    );

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error("Project API Error:", error.message);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 },
    );
  }
};
