export interface AdmissionDownloadBrochureFormErrors {
  brochure_download_email_id?: string;
}

export interface AdmissionDownloadBrochure {
    brochure_download_email_id: string;
    ip_address: string;
    referer_url: string;
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
    referer_url: string;
}

export interface EnquiryFormErrors {
    enquiry_reason?: string;
    enquiry_full_name?: string;
    enquiry_email_id?: string;
    enquiry_mobile_number?: string;
    enquiry_city_name?: string;
    enquiry_remarks?: string;
    enquiry_terms?: string;
}

export interface EnquiryForm {
    enquiry_reason: string;
    enquiry_full_name: string;
    enquiry_email_id: string;
    enquiry_mobile_number: string;
    enquiry_city_name: string;
    enquiry_remarks: string;
    ip_address: string;
    referer_url: string;
}