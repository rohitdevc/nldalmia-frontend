import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

import fs from "fs/promises";
import path from "path";

import { getBlogs } from "@/lib/blog";
import { getBlogCategories } from "@/lib/blog";
import { getEvents } from "@/lib/event";
import { getAwards } from "@/lib/awards";
import { getFaculties } from "@/lib/faculty";
import { getInstitutionalPublications } from "@/lib/institutional-publications";
import { getIQAC } from "@/lib/iqac";
import { getPrograms } from "@/lib/program";
import { getStaticPages } from "@/lib/common";
import { getMediaCategories } from "@/lib/media";
import { getPlacementsReports } from "@/lib/placements";

async function generateSearchIndex() {
    const static_pages = await getStaticPages();
    const blogs = await getBlogs();
    const blog_categories = await getBlogCategories();
    const events = await getEvents();
    const awards = await getAwards();
    const faculties = await getFaculties();
    const institutional_publications = await getInstitutionalPublications();
    const iqac = await getIQAC();
    const programs = await getPrograms();
    const media_categories = await getMediaCategories();
    const placement_reports = await getPlacementsReports();

    const pages = [
        ...static_pages.map(static_page => ({
            title: static_page.page_name,
            path: `/${static_page.canonical_tag !== "/" ? static_page.canonical_tag : '' }`,
            type: 'Static'
        })),

        ...placement_reports.map(placement_report => ({
            title: placement_report.report_caption,
            path: `${placement_report.report_pdf}`,
            type: 'Placements'
        })),

        ...media_categories.map(media_category => ({
            title: media_category.media_category_title,
            path: `/media/${media_category.media_category_url_slug}`,
            type: 'Media'
        })),

        ...blog_categories.map(blog_category => ({
            title: blog_category.blog_category_title,
            path: `/category/${blog_category.blog_category_url_slug}`,
            type: 'Blog'
        })),

        ...blogs.map(blog => ({
            title: blog.blog_title,
            path: `/${blog.blog_url_slug}`,
            type: 'Blog'
        })),

        ...events.map(event => ({
            title: event.event_name,
            path: `/events/${event.event_url_slug}`,
            type: 'Event'
        })),

        ...awards.map(award => ({
            title: award.award_name,
            path: `/awards-and-achievements`,
            type: 'Awards'
        })),

        ...faculties.map(faculty => ({
            title: faculty.faculty_name,
            path: `/faculty/${faculty.faculty_url_slug}`,
            type: 'Faculty'
        })),

        ...institutional_publications.map(institutional_publication => ({
            title: institutional_publication.institutional_publication_title,
            path: `${institutional_publication.institutional_publication_pdf}`,
            type: 'Institutional Publication'
        })),

        ...iqac.map(iqac_row => ({
            title: `IQAC ${iqac_row.iqac_title}`,
            path: `${iqac_row.iqac_pdf}`,
            type: 'IQAC'
        })),

        ...programs.map(program => ({
            title: program.program_name,
            path: `/programs/${program.program_url_slug}`,
            type: 'Program'
        }))
    ]

    const outPath = path.join(process.cwd(), 'generated/search-index.json');

    await fs.mkdir(path.dirname(outPath), { recursive: true});

    await fs.writeFile(outPath, JSON.stringify(pages, null, 2));
}

generateSearchIndex();