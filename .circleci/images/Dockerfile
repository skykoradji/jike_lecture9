# Built in reference to https://circleci.com/docs/2.0/custom-images/
# example of building a customized docker image
FROM circleci/node:8.11.3-browsers

LABEL com.circleci.preserve-entrypoint=true
WORKDIR /home/circleci

RUN mkdir akamai && cd akamai && wget https://github.com/akamai/cli-purge/releases/download/1.0.0/akamai-purge-1.0.0-linux386 -O akamai-purge && chmod 700 akamai-purge
RUN wget https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-217.0.0-linux-x86_64.tar.gz
RUN tar -xzvf google-cloud-sdk-217.0.0-linux-x86_64.tar.gz
RUN ./google-cloud-sdk/install.sh --quiet
ENV PATH $PATH:/home/circleci/google-cloud-sdk/bin:/home/circleci/akamai
RUN gcloud components update
RUN gcloud components install beta
RUN sudo apt-get install jq

ENTRYPOINT /bin/bash