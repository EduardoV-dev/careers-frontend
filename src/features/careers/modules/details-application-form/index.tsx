import { useTranslation } from 'next-i18next';
import React from 'react';
import Dropzone from 'react-dropzone';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Button } from '@/components/button';
import { FormControl } from '@/components/form-control';
import { Modal, Props as ModalProps } from '@/components/modal';

import { applyToJob } from '../../api/apply-to-job';
import { JobApplication } from '../../types/application-form';

import styles from './index.module.scss';

export const toBase64 = (file: Blob): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

interface Props {
    modalProps: Pick<ModalProps, 'close' | 'isOpen'>;
    jobTitle: string;
}

type ApplicationForm = Omit<JobApplication, 'jobTitle'>;

export const DetailsApplicationForm = ({ jobTitle, modalProps }: Props): JSX.Element => {
    const { t } = useTranslation('career-details');

    const form = useForm<ApplicationForm>();
    const [isFormDisabled, setIsFormDisabled] = React.useState<boolean>(false);

    const { errors } = form.formState;

    const onSubmit: SubmitHandler<ApplicationForm> = async (data) => {
        if (isFormDisabled) return;
        setIsFormDisabled(true);

        const base64Resume = await toBase64(data.resume as File);
        const jobApplication: JobApplication = {
            ...data,
            resume: base64Resume,
            jobTitle,
        };

        try {
            await applyToJob(jobApplication);
            toast.success(t('form.toast.success'));
            form.reset();
        } catch (error) {
            toast.error(t('form.toast.error'));
            setIsFormDisabled(false);
        }
    };

    /* React Render */

    const resumeFileName: string | undefined = (form.watch('resume') as File | undefined)?.name;

    return (
        <Modal title={t('form.title')} className="hola" {...modalProps}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormControl
                    errorMessage={errors.fullName?.message}
                    label={t('form.full-name.label')}
                    id="fullName"
                    required
                >
                    <input
                        type="text"
                        id="fullName"
                        placeholder={t('form.full-name.placeholder') as string}
                        {...form.register('fullName', {
                            required: t('form.full-name.required') as string,
                        })}
                    />
                </FormControl>

                <div className={styles['two-columns-group']}>
                    <FormControl
                        errorMessage={errors.email?.message}
                        label={t('form.email.label')}
                        id="email"
                        required
                    >
                        <input
                            type="text"
                            id="email"
                            placeholder={t('form.email.placeholder') as string}
                            {...form.register('email', {
                                required: t('form.email.required') as string,
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: t('form.email.pattern'),
                                },
                            })}
                        />
                    </FormControl>

                    <FormControl label={t('form.phone.label')} id="phone">
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder={t('form.phone.label') as string}
                        />
                    </FormControl>
                </div>

                <FormControl
                    errorMessage={errors.resume?.message}
                    label={t('form.resume.label')}
                    id="resume"
                    required
                >
                    <Controller
                        control={form.control}
                        name="resume"
                        rules={{ required: t('form.resume.required') as string }}
                        render={({ field: { onChange } }) => (
                            <Dropzone
                                accept={{ 'application/pdf': ['.pdf'] }}
                                onDrop={(acceptedFiles) => onChange(acceptedFiles[0])}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <section className={styles.dropzone}>
                                        <div {...getRootProps()}>
                                            <input {...getInputProps()} />

                                            {!resumeFileName ? (
                                                <>
                                                    <p>
                                                        {t('form.dropzone.enter-file-text')}{' '}
                                                        <span>
                                                            {t(
                                                                'form.dropzone.enter-file-text-highlight',
                                                            )}
                                                        </span>
                                                    </p>

                                                    <span>({t('form.dropzone.filetypes')})</span>
                                                </>
                                            ) : (
                                                <>
                                                    <p>{resumeFileName}</p>

                                                    <span>{t('form.dropzone.change-file')}</span>
                                                </>
                                            )}
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                        )}
                    />
                </FormControl>

                <Button
                    color="reddish"
                    className={styles['send-application-button']}
                    disabled={isFormDisabled}
                    submit
                >
                    {t('form.send-button')}
                </Button>
            </form>
        </Modal>
    );
};
