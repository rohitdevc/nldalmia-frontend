export interface AdmissionDownloadBrochureFormErrors {
  brochure_download_email_id?: string;
}

export interface AdmissionDownloadBrochure {
    brochure_download_email_id: string;
    ip_address: string;
}

export interface ProgramDownloadBrochureFormErrors {
    downloader_full_name?: string;
    downloader_email_id?: string;
    downloader_mobile_number?: string;
    downloader_state_name?: string;
    downloader_city_name?: string;
    downloader_graduation_status?: string;
    downloader_terms_agree?: string;
}

export interface ProgramDownloadBrochure {
    program_name: string;
    downloader_full_name: string;
    downloader_email_id: string;
    downloader_mobile_number: string;
    downloader_state_name: string;
    downloader_city_name: string;
    downloader_graduation_status: string;
    ip_address: string;
}