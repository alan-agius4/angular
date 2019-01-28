# Copyright 2017 The Bazel Authors. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Runs @microsoft/api-extractor
"""

def run_api_extractor(
        ctx,
        entry_point,
        dts_bundle_out = None,
        api_review_folder = None,
        accept_api_updates = False,
    ):
    args = ctx.actions.args()
    args.use_param_file("%s", use_always = True)

    args.add("--entry-point", entry_point)
    args.add("--dts-bundle-out", dts_bundle_out)

    dts_entry = ctx.actions.declare_file(dts_bundle_out)

    ctx.actions.run(
        progress_message = "Running API Extractor %s" % str(ctx.label),
        mnemonic = "APIExtractor",
        executable = ctx.executable._api_extractor,
        outputs = [dts_entry],
        inputs = ctx.files.deps,
        arguments = [args],
    )

    # return depset([dts_entry])
    return dts_entry
