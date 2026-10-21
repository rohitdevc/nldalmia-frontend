import type { MetadataRoute } from "next";
import { getBlogs } from "@/lib/blog";
import { getBlogCategories } from "@/lib/blog";
import { getEvents } from "@/lib/event";
import { getFaculties } from "@/lib/faculty";
import { getInstitutionalPublications } from "@/lib/institutional-publications";
import { getIQAC } from "@/lib/iqac";
import { getPrograms } from "@/lib/program";
import { getStaticPages } from "@/lib/common";
import { getMediaCategories } from "@/lib/media";
import { getPlacementsReports } from "@/lib/placements";

const SITE_URL = "https://www.nldalmia.in";

const static_pages = await getStaticPages();
const blogs = await getBlogs();
const blog_categories = await getBlogCategories();
const events = await getEvents();
const faculties = await getFaculties();
const institutional_publications = await getInstitutionalPublications();
const iqac = await getIQAC();
const programs = await getPrograms();
const media_categories = await getMediaCategories();
const placement_reports = await getPlacementsReports();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls: MetadataRoute.Sitemap = static_pages.map((path) => ({
    url: `${SITE_URL}/${path.canonical_tag === '/' ? '' : path.canonical_tag}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogUrls: MetadataRoute.Sitemap = blogs.map((path) => ({
    url: `${SITE_URL}/${path.blog_url_slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogCategoryUrls: MetadataRoute.Sitemap = blog_categories.map((path) => ({
    url: `${SITE_URL}/category/${path.blog_category_url_slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const eventsUrls: MetadataRoute.Sitemap = events.map((path) => ({
    url: `${SITE_URL}/events/${path.event_url_slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const facultyUrls: MetadataRoute.Sitemap = faculties.map((path) => ({
    url: `${SITE_URL}/faculties/${path.faculty_url_slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const magazinesUrls: MetadataRoute.Sitemap = institutional_publications.map((path) => ({
    url: `${path.institutional_publication_pdf}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const IQACUrls: MetadataRoute.Sitemap = iqac.filter(x => x.iqac_pdf != null).map((path) => ({
    url: `${path.iqac_pdf}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const programUrls: MetadataRoute.Sitemap = programs.map((path) => ({
    url: `${SITE_URL}/programs/${path.program_url_slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const mediaCategoryUrls: MetadataRoute.Sitemap = media_categories.map((path) => ({
    url: `${SITE_URL}/media/${path.media_category_url_slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const placementReportUrls: MetadataRoute.Sitemap = placement_reports.map((path) => ({
    url: `${path.report_pdf}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls, ...blogCategoryUrls, ...eventsUrls, ...facultyUrls, ...magazinesUrls, ...IQACUrls, ...programUrls, ...mediaCategoryUrls, ...placementReportUrls];
}
